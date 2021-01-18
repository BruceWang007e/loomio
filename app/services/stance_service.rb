class StanceService
  def self.redeem(stance:, actor:)
    actor.ability.authorize! :redeem, stance
    stance.update(participant: actor, accepted_at: Time.zone.now)
  end

  def self.destroy(stance:, actor:)
    actor.ability.authorize! :destroy, stance
    stance.destroy
    EventBus.broadcast 'stance_destroy', stance, actor
  end

  def self.create_or_update(stance:, actor:, params:)
    actor.ability.authorize! :vote_in, Poll.find(params[:poll_id])

    stance = Stance.where(
      poll_id: params[:poll_id],
      participant_id: actor.id,
      latest: true).first || stance

    stance.stance_choices = []
    HasRichText.assign_attributes_and_update_files(stance, params)
    return false unless stance.valid?

    stance.participant = actor
    stance.cast_at ||= Time.zone.now

    Stance.transaction do
      Stance.where(poll: stance.poll_id, participant_id: actor.id).
             where.not(id: stance.id).
             update_all(latest: false)
      stance.save!
    end

    stance.update_versions_count
    stance.poll.update_stance_data

    event = stance.created_event || Events::StanceCreated.publish!(stance)
    MessageChannelService.publish_models([event], scope: {current_user_id: actor.id}, user_id: actor.id)
    event
  end
end
