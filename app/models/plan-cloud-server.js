import planModelMixin from '../mixins/plan_model';

export default DS.Model.extend(planModelMixin, {
  datacenter: DS.attr('string'),
  memory: DS.attr('string'),
  processor: DS.attr('string'),
  operating_system: DS.attr('string'),
  network: DS.attr('string'),
  disk_san: DS.attr('boolean'),
  disk_1: DS.attr('string'),
  disk_2: DS.attr('string'),
  disk_3: DS.attr('string'),
  disk_4: DS.attr('string'),
  disk_5: DS.attr('string'),
  value: DS.attr('string')
});
