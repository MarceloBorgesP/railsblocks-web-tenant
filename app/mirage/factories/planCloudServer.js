import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function generatePlanName(i) {
    return "Plan " + (i+1);
  },
  enabled: true,
  hourly: true,
  datacenter: "Amsterdam 1",
  memory: "1 GB",
  processor: "1 x 2.0 GHz Core",
  operating_system: "CentOS - Latest",
  network: "100 Mbps Public & Private Network Uplinks",
  disk_san: true,
  disk_1: "10 GB",
  disk_2: "10 GB",
  disk_3: "10 GB",
  disk_4: "10 GB",
  disk_5: "10 GB",
  value: "R$ 199,00"
});