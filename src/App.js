import _ from "underscore";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import DataGrid from "./modules/components/DataGrid/DataGrid";
import "./modules/components/DataGrid/DataGrid.scss";
import "./App.css";

// data for the grid
const items = [
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "06f9abc2-869c-42f8-bf1a-c7f104c22913",
            Ip: "156.1.1.1",
            L3InterfaceId: "f562ce39-1cb3-4acc-95da-679aab8bbb5d"
          }
        ],
        Id: "f562ce39-1cb3-4acc-95da-679aab8bbb5d",
        name: null,
        mac: "00:1B:D4:2F:0A:C2",
        ip: null,
        management: true,
        NodeId: "4d242bb4-0720-4de1-b1e4-035332e82e2c"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "73b1b0ec-3edb-4da0-a0ed-5bd5686c1ae3",
      NodeId: "4d242bb4-0720-4de1-b1e4-035332e82e2c",
      Overall: "normal"
    },
    tags: [],
    Id: "4d242bb4-0720-4de1-b1e4-035332e82e2c",
    nodeId: "00:1B:D4:2F:0A:C2",
    serialNumber: "",
    hostname: "C3845_In_SW",
    modelId: "NME-XD-24ES-1S-P",
    nodeType: "Switch",
    productId: "NME-XD-24ES-1S-P",
    version: "12.2(250.30)EW TEST ENGINEERING ESTG_WEEKLY BUILD",
    updateVersion: "",
    vid: "",
    description: "cisco NME-XD-24ES-1S-P",
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "06f9abc2-869c-42f8-bf1a-c7f104c22913",
          Ip: "156.1.1.1",
          L3InterfaceId: "f562ce39-1cb3-4acc-95da-679aab8bbb5d"
        }
      ],
      Id: "f562ce39-1cb3-4acc-95da-679aab8bbb5d",
      name: null,
      mac: "00:1B:D4:2F:0A:C2",
      ip: null,
      management: true,
      NodeId: "4d242bb4-0720-4de1-b1e4-035332e82e2c"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "7470134c-a90b-4c15-994e-59460a46a843",
            Ip: "153.1.1.1",
            L3InterfaceId: "752015b3-6b53-464f-be52-7a039d59f276"
          }
        ],
        Id: "752015b3-6b53-464f-be52-7a039d59f276",
        name: null,
        mac: "00:1B:D4:2F:0A:80",
        ip: null,
        management: true,
        NodeId: "f37d6ce3-7151-49b8-aeea-127a4986d25f"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "e92ba7d6-ceaf-402c-ba64-1a8f9e6979e9",
      NodeId: "f37d6ce3-7151-49b8-aeea-127a4986d25f",
      Overall: "normal"
    },
    tags: [],
    Id: "f37d6ce3-7151-49b8-aeea-127a4986d25f",
    nodeId: "00:1B:D4:2F:0A:80",
    serialNumber: "",
    hostname: "C3845_In_SW",
    modelId: "",
    nodeType: "Switch",
    productId: "",
    version: "",
    updateVersion: "",
    vid: "",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "7470134c-a90b-4c15-994e-59460a46a843",
          Ip: "153.1.1.1",
          L3InterfaceId: "752015b3-6b53-464f-be52-7a039d59f276"
        }
      ],
      Id: "752015b3-6b53-464f-be52-7a039d59f276",
      name: null,
      mac: "00:1B:D4:2F:0A:80",
      ip: null,
      management: true,
      NodeId: "f37d6ce3-7151-49b8-aeea-127a4986d25f"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "4d007bb5-6429-4642-bcd8-a53c1c807cb0",
            Ip: "156.1.1.1",
            L3InterfaceId: "81b79972-c8a4-4f95-b9cd-f55556797990"
          }
        ],
        Id: "81b79972-c8a4-4f95-b9cd-f55556797990",
        name: null,
        mac: "00:1B:D4:2F:0A:C2",
        ip: null,
        management: true,
        NodeId: "6eae8298-b299-49fa-bebc-ed1eea44531d"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "a5cca9f4-8f34-4c8c-b81c-c8053f6625ed",
      NodeId: "6eae8298-b299-49fa-bebc-ed1eea44531d",
      Overall: "normal"
    },
    tags: [],
    Id: "6eae8298-b299-49fa-bebc-ed1eea44531d",
    nodeId: "00:1B:D4:2F:0A:C2",
    serialNumber: "",
    hostname: "C3845_In_SW",
    modelId: "NME-XD-24ES-1S-P",
    nodeType: "Switch",
    productId: "NME-XD-24ES-1S-P",
    version: "12.2(250.30)EW TEST ENGINEERING ESTG_WEEKLY BUILD",
    updateVersion: "",
    vid: "",
    description: "cisco NME-XD-24ES-1S-P",
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "4d007bb5-6429-4642-bcd8-a53c1c807cb0",
          Ip: "156.1.1.1",
          L3InterfaceId: "81b79972-c8a4-4f95-b9cd-f55556797990"
        }
      ],
      Id: "81b79972-c8a4-4f95-b9cd-f55556797990",
      name: null,
      mac: "00:1B:D4:2F:0A:C2",
      ip: null,
      management: true,
      NodeId: "6eae8298-b299-49fa-bebc-ed1eea44531d"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c37f4dbd-3376-4900-b361-d1a542e5f310",
            Ip: "153.1.1.1",
            L3InterfaceId: "b8fd25c8-8e18-4596-b330-ea50ef27721c"
          }
        ],
        Id: "b8fd25c8-8e18-4596-b330-ea50ef27721c",
        name: null,
        mac: "00:1B:D4:2F:0A:80",
        ip: null,
        management: true,
        NodeId: "97cfc7ac-ef98-474b-9e47-fa8df80f43b5"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "e238e894-141d-458d-8f12-b4805c11ee4a",
      NodeId: "97cfc7ac-ef98-474b-9e47-fa8df80f43b5",
      Overall: "normal"
    },
    tags: [],
    Id: "97cfc7ac-ef98-474b-9e47-fa8df80f43b5",
    nodeId: "00:1B:D4:2F:0A:80",
    serialNumber: "",
    hostname: "C3845_In_SW",
    modelId: "",
    nodeType: "Switch",
    productId: "",
    version: "",
    updateVersion: "",
    vid: "",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c37f4dbd-3376-4900-b361-d1a542e5f310",
          Ip: "153.1.1.1",
          L3InterfaceId: "b8fd25c8-8e18-4596-b330-ea50ef27721c"
        }
      ],
      Id: "b8fd25c8-8e18-4596-b330-ea50ef27721c",
      name: null,
      mac: "00:1B:D4:2F:0A:80",
      ip: null,
      management: true,
      NodeId: "97cfc7ac-ef98-474b-9e47-fa8df80f43b5"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "0d42d486-41ee-475c-a32b-956eaded48ae",
            Ip: "156.1.1.253",
            L3InterfaceId: "b548fd04-6f69-4eaa-a945-20a08af0b5c9"
          }
        ],
        Id: "b548fd04-6f69-4eaa-a945-20a08af0b5c9",
        name: null,
        mac: "F4:EA:67:8C:73:51",
        ip: null,
        management: true,
        NodeId: "5bda8ad8-0ac1-4e14-a871-248d49b626f3"
      }
    ],
    maintenance: {
      Id: "a069cd1b-fe3c-47b5-a78d-aca39ac7e577",
      NodeId: "5bda8ad8-0ac1-4e14-a871-248d49b626f3",
      status: "3502",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "fb55281e-f937-44ed-882d-2bf0ad7cf690",
        name: "backup",
        value: true
      },
      {
        Id: "e2a64f3a-8fc6-4bce-b7af-4d2e16f9aa63",
        name: "reboot",
        value: true
      },
      {
        Id: "0d390d79-787e-4dcd-889c-7437359c23c9",
        name: "upgrade",
        value: true
      },
      {
        Id: "bbcc0689-189e-4dc4-818b-bdb6b6fb63eb",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "e7b4a645-2e39-4669-9bbd-00993f0036d4",
      NodeId: "5bda8ad8-0ac1-4e14-a871-248d49b626f3",
      Overall: "normal"
    },
    tags: [],
    Id: "5bda8ad8-0ac1-4e14-a871-248d49b626f3",
    nodeId: "PID:SG500X-48P-K9,VID:V01,SN:DNI1619046P",
    serialNumber: "DNI1619046P",
    hostname: "CT-Nikola",
    modelId: "SG500X-48P",
    nodeType: "Switch",
    productId: "SG500X-48P-K9",
    version: "1.4.8.6",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "0d42d486-41ee-475c-a32b-956eaded48ae",
          Ip: "156.1.1.253",
          L3InterfaceId: "b548fd04-6f69-4eaa-a945-20a08af0b5c9"
        }
      ],
      Id: "b548fd04-6f69-4eaa-a945-20a08af0b5c9",
      name: null,
      mac: "F4:EA:67:8C:73:51",
      ip: null,
      management: true,
      NodeId: "5bda8ad8-0ac1-4e14-a871-248d49b626f3"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "463d630b-9efa-49f0-9f1b-47509ec019d3",
            Ip: "156.1.1.253",
            L3InterfaceId: "2121abaa-8c69-455e-a1f2-a9888c8d5b81"
          }
        ],
        Id: "2121abaa-8c69-455e-a1f2-a9888c8d5b81",
        name: null,
        mac: "F4:EA:67:8C:73:51",
        ip: null,
        management: true,
        NodeId: "06f12002-9b13-4b88-8917-853288c26504"
      }
    ],
    maintenance: {
      Id: "e068b44e-5271-4d0c-a8c6-3a53d62366e4",
      NodeId: "06f12002-9b13-4b88-8917-853288c26504",
      status: "3502",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "dd1bfbcf-1f80-4b65-8978-0e8ca1bc7fc9",
        name: "upgrade",
        value: true
      },
      {
        Id: "3f5e51d7-637f-4146-ba36-20759f8f1ffb",
        name: "save-running",
        value: true
      },
      {
        Id: "e93c6513-4d00-4270-8e25-ac2eed4cb0b9",
        name: "backup",
        value: true
      },
      {
        Id: "3f8e3356-b772-4c3a-b7bf-c39580bff496",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "e1812f10-b446-41c1-862e-e2d245ca86fd",
      NodeId: "06f12002-9b13-4b88-8917-853288c26504",
      Overall: "normal"
    },
    tags: [],
    Id: "06f12002-9b13-4b88-8917-853288c26504",
    nodeId: "PID:SG500X-48P-K9,VID:V01,SN:DNI1619046P",
    serialNumber: "DNI1619046P",
    hostname: "CT-Nikola",
    modelId: "SG500X-48P",
    nodeType: "Switch",
    productId: "SG500X-48P-K9",
    version: "1.4.8.6",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "463d630b-9efa-49f0-9f1b-47509ec019d3",
          Ip: "156.1.1.253",
          L3InterfaceId: "2121abaa-8c69-455e-a1f2-a9888c8d5b81"
        }
      ],
      Id: "2121abaa-8c69-455e-a1f2-a9888c8d5b81",
      name: null,
      mac: "F4:EA:67:8C:73:51",
      ip: null,
      management: true,
      NodeId: "06f12002-9b13-4b88-8917-853288c26504"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "cba76800-f667-4c79-804c-7e9c20e47733",
            Ip: "156.1.1.10",
            L3InterfaceId: "727c8a0f-e61a-4f38-9d3c-14ed5c2e7a66"
          }
        ],
        Id: "727c8a0f-e61a-4f38-9d3c-14ed5c2e7a66",
        name: null,
        mac: "C8:F9:F9:49:F0:5E",
        ip: null,
        management: true,
        NodeId: "4fd19ec2-7edc-4730-8370-2eb0e73b43ce"
      }
    ],
    maintenance: {
      Id: "c79d01d9-f081-4a18-8200-7b95b5b44885",
      NodeId: "4fd19ec2-7edc-4730-8370-2eb0e73b43ce",
      status: "3508",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "1671148800000",
      warrantyEndDate: 1671148800000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "77b0bdb4-9314-4009-9c63-62a7fb513a9f",
      NodeId: "4fd19ec2-7edc-4730-8370-2eb0e73b43ce",
      Overall: "info"
    },
    tags: [],
    Id: "4fd19ec2-7edc-4730-8370-2eb0e73b43ce",
    nodeId: "PID:SRW2024-K9,VID:V02,SN:DNI161501NC",
    serialNumber: "DNI161501NC",
    hostname: "switch49f05e",
    modelId: "SG 300-28",
    nodeType: "Switch",
    productId: "SRW2024-K9",
    version: "1.1.2.0",
    updateVersion: "1.4.8.06",
    vid: "V02",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "cba76800-f667-4c79-804c-7e9c20e47733",
          Ip: "156.1.1.10",
          L3InterfaceId: "727c8a0f-e61a-4f38-9d3c-14ed5c2e7a66"
        }
      ],
      Id: "727c8a0f-e61a-4f38-9d3c-14ed5c2e7a66",
      name: null,
      mac: "C8:F9:F9:49:F0:5E",
      ip: null,
      management: true,
      NodeId: "4fd19ec2-7edc-4730-8370-2eb0e73b43ce"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "d370e552-f234-4538-b8e9-4933a0775f43",
            Ip: "156.1.1.10",
            L3InterfaceId: "c7a571b1-1aa2-4a6a-bd6a-b1275112980a"
          }
        ],
        Id: "c7a571b1-1aa2-4a6a-bd6a-b1275112980a",
        name: null,
        mac: "C8:F9:F9:49:F0:5E",
        ip: null,
        management: true,
        NodeId: "7c46308a-0cc7-4456-bb8f-3ca350f6df10"
      }
    ],
    maintenance: {
      Id: "ef1ba12a-a8c5-4ba0-b632-9b5c65ec6d17",
      NodeId: "7c46308a-0cc7-4456-bb8f-3ca350f6df10",
      status: "3508",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "1671148800000",
      warrantyEndDate: 1671148800000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "858e1ddb-dd00-459d-a0ea-2142dac37aa8",
      NodeId: "7c46308a-0cc7-4456-bb8f-3ca350f6df10",
      Overall: "info"
    },
    tags: [],
    Id: "7c46308a-0cc7-4456-bb8f-3ca350f6df10",
    nodeId: "PID:SRW2024-K9,VID:V02,SN:DNI161501NC",
    serialNumber: "DNI161501NC",
    hostname: "switch49f05e",
    modelId: "SG 300-28",
    nodeType: "Switch",
    productId: "SRW2024-K9",
    version: "1.1.2.0",
    updateVersion: "1.4.8.06",
    vid: "V02",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "d370e552-f234-4538-b8e9-4933a0775f43",
          Ip: "156.1.1.10",
          L3InterfaceId: "c7a571b1-1aa2-4a6a-bd6a-b1275112980a"
        }
      ],
      Id: "c7a571b1-1aa2-4a6a-bd6a-b1275112980a",
      name: null,
      mac: "C8:F9:F9:49:F0:5E",
      ip: null,
      management: true,
      NodeId: "7c46308a-0cc7-4456-bb8f-3ca350f6df10"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c070daea-a73b-4533-b704-ee6673f5ca3e",
            Ip: "156.1.1.11",
            L3InterfaceId: "4eda0ced-20f1-4133-b8d5-bc477fa2c9b4"
          }
        ],
        Id: "4eda0ced-20f1-4133-b8d5-bc477fa2c9b4",
        name: null,
        mac: "DE:AD:C0:E7:00:10",
        ip: null,
        management: true,
        NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [
      {
        Id: "a143c71d-b05b-436b-b3cc-60d5c277efcc",
        networkFindItId: "00000000-0000-0000-0000-000000000000",
        eventId: "669005e0-0edc-4651-9c61-9484c9697a0b",
        timeStamp: 1507775015000,
        NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6",
        nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
        nodeType: "WAP",
        severity: 1,
        type: "/state_change/health",
        correlator: "",
        englishString:
          "{nodeType} {hostname} health status changed from {from} to {to} at {time}",
        acknowledged: false,
        parameters: null
      },
      {
        Id: "5d12bb40-790b-4efb-939d-a66afa696b8f",
        networkFindItId: "00000000-0000-0000-0000-000000000000",
        eventId: "dc78218d-c46e-4116-8697-0cd6a847546e",
        timeStamp: 1507773933000,
        NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6",
        nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
        nodeType: "WAP",
        severity: 1,
        type: "/state_change/health",
        correlator: "",
        englishString:
          "{nodeType} {hostname} health status changed from {from} to {to} at {time}",
        acknowledged: false,
        parameters: null
      },
      {
        Id: "2f99491d-7abd-4efd-9e5b-d123afb1bfbe",
        networkFindItId: "00000000-0000-0000-0000-000000000000",
        eventId: "1c48d87b-016a-4e93-8037-9e93844b6f22",
        timeStamp: 1507774112000,
        NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6",
        nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
        nodeType: "WAP",
        severity: 3,
        type: "/state_change/health",
        correlator: "",
        englishString:
          "{nodeType} {hostname} health status changed from {from} to {to} at {time}",
        acknowledged: false,
        parameters: null
      },
      {
        Id: "590e6d36-ebe3-4ab5-8eb9-e558790a3d9c",
        networkFindItId: "00000000-0000-0000-0000-000000000000",
        eventId: "9c53401b-fd17-4a8f-9635-1c9534508917",
        timeStamp: 1507775197000,
        NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6",
        nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
        nodeType: "WAP",
        severity: 3,
        type: "/state_change/health",
        correlator: "",
        englishString:
          "{nodeType} {hostname} health status changed from {from} to {to} at {time}",
        acknowledged: false,
        parameters: null
      }
    ],
    states: {
      Id: "39f5e671-572a-4aac-b298-665787f358dd",
      NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6",
      Overall: "normal"
    },
    tags: [],
    Id: "dffe70b6-7289-47d2-923e-976559c28bb6",
    nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
    serialNumber: "DE:AD:C0:E7:00:10",
    hostname: "wap150-GItest",
    modelId: "WAP150",
    nodeType: "WAP",
    productId: "WAP150-J-K9-JP",
    version: "1.0.1.6",
    updateVersion: "",
    vid: "0.1",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c070daea-a73b-4533-b704-ee6673f5ca3e",
          Ip: "156.1.1.11",
          L3InterfaceId: "4eda0ced-20f1-4133-b8d5-bc477fa2c9b4"
        }
      ],
      Id: "4eda0ced-20f1-4133-b8d5-bc477fa2c9b4",
      name: null,
      mac: "DE:AD:C0:E7:00:10",
      ip: null,
      management: true,
      NodeId: "dffe70b6-7289-47d2-923e-976559c28bb6"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "6192c826-eae1-4630-9f9a-378856c0edc0",
            Ip: "156.1.1.11",
            L3InterfaceId: "8661e1d6-9703-404c-9ac3-99e2612b335e"
          }
        ],
        Id: "8661e1d6-9703-404c-9ac3-99e2612b335e",
        name: null,
        mac: "DE:AD:C0:E7:00:10",
        ip: null,
        management: true,
        NodeId: "44d19a02-8096-4fd2-bade-c893878f5f7d"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [],
    NodeEvents: [],
    states: {
      Id: "1f8ad5bf-61a6-4380-8bb6-0207c457f12c",
      NodeId: "44d19a02-8096-4fd2-bade-c893878f5f7d",
      Overall: "normal"
    },
    tags: [],
    Id: "44d19a02-8096-4fd2-bade-c893878f5f7d",
    nodeId: "PID:WAP150-J-K9-JP,VID:0.1,SN:DE:AD:C0:E7:00:10",
    serialNumber: "DE:AD:C0:E7:00:10",
    hostname: "wap150-GItest",
    modelId: "WAP150",
    nodeType: "WAP",
    productId: "WAP150-J-K9-JP",
    version: "1.0.1.6",
    updateVersion: "",
    vid: "0.1",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "6192c826-eae1-4630-9f9a-378856c0edc0",
          Ip: "156.1.1.11",
          L3InterfaceId: "8661e1d6-9703-404c-9ac3-99e2612b335e"
        }
      ],
      Id: "8661e1d6-9703-404c-9ac3-99e2612b335e",
      name: null,
      mac: "DE:AD:C0:E7:00:10",
      ip: null,
      management: true,
      NodeId: "44d19a02-8096-4fd2-bade-c893878f5f7d"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "dab9ce2a-6a1c-41ac-8044-e3689024cf91",
            Ip: "156.1.1.71",
            L3InterfaceId: "e9b50799-2de8-4e3d-b0f9-d6d25c7e00c4"
          }
        ],
        Id: "e9b50799-2de8-4e3d-b0f9-d6d25c7e00c4",
        name: null,
        mac: "00:EB:D5:5E:03:80",
        ip: null,
        management: true,
        NodeId: "d36b7d86-8e5d-4287-9d8c-4de853ed0236"
      }
    ],
    maintenance: {
      Id: "9cb279f4-4021-4f0b-8b83-0031aa5e9868",
      NodeId: "d36b7d86-8e5d-4287-9d8c-4de853ed0236",
      status: "3503",
      coverageEndDate: 1517529600000,
      CoverageEndDateStr: "1517529600000",
      WarrantyEndDateStr: "1809302400000",
      warrantyEndDate: 1809302400000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "db3d5a27-bc6c-47d8-83ad-3898e5341875",
        name: "upgrade",
        value: true
      },
      {
        Id: "042b9259-285b-45f0-89e5-5f6393659325",
        name: "backup",
        value: true
      },
      {
        Id: "7de297c1-eb8b-465c-8628-b312b47f7f4f",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "65ef5079-5aa9-464e-a0bb-7895111a16bd",
      NodeId: "d36b7d86-8e5d-4287-9d8c-4de853ed0236",
      Overall: "warning"
    },
    tags: [],
    Id: "d36b7d86-8e5d-4287-9d8c-4de853ed0236",
    nodeId: "PID:WAP125-J-K9-JP,VID:V01,SN:DNI20380016",
    serialNumber: "DNI20380016",
    hostname: "wap5e0380",
    modelId: "WAP125",
    nodeType: "WAP",
    productId: "WAP125-J-K9-JP",
    version: "1.0.0.4",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "dab9ce2a-6a1c-41ac-8044-e3689024cf91",
          Ip: "156.1.1.71",
          L3InterfaceId: "e9b50799-2de8-4e3d-b0f9-d6d25c7e00c4"
        }
      ],
      Id: "e9b50799-2de8-4e3d-b0f9-d6d25c7e00c4",
      name: null,
      mac: "00:EB:D5:5E:03:80",
      ip: null,
      management: true,
      NodeId: "d36b7d86-8e5d-4287-9d8c-4de853ed0236"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "3758f225-05b3-4ecf-8b81-2a9167f2bd79",
            Ip: "156.1.1.71",
            L3InterfaceId: "041121e5-b7ab-4d89-85a7-5d432bc31aad"
          }
        ],
        Id: "041121e5-b7ab-4d89-85a7-5d432bc31aad",
        name: null,
        mac: "00:EB:D5:5E:03:80",
        ip: null,
        management: true,
        NodeId: "31ffeecb-ade6-461e-aeb2-b8bf91876764"
      }
    ],
    maintenance: {
      Id: "1014446c-4edd-487c-9e2f-d8410ae0d343",
      NodeId: "31ffeecb-ade6-461e-aeb2-b8bf91876764",
      status: "3503",
      coverageEndDate: 1517529600000,
      CoverageEndDateStr: "1517529600000",
      WarrantyEndDateStr: "1809302400000",
      warrantyEndDate: 1809302400000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "52cf4505-a8b0-45bc-a3d8-27eb446425a3",
        name: "reboot",
        value: true
      },
      {
        Id: "5d06ec13-3b3b-42fa-bbdd-6773ebeeb2ff",
        name: "upgrade",
        value: true
      },
      {
        Id: "699af422-3ebe-49ce-889c-a476e4faf25d",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "a32131d7-1755-4b34-9e30-9cca448dff10",
      NodeId: "31ffeecb-ade6-461e-aeb2-b8bf91876764",
      Overall: "warning"
    },
    tags: [],
    Id: "31ffeecb-ade6-461e-aeb2-b8bf91876764",
    nodeId: "PID:WAP125-J-K9-JP,VID:V01,SN:DNI20380016",
    serialNumber: "DNI20380016",
    hostname: "wap5e0380",
    modelId: "WAP125",
    nodeType: "WAP",
    productId: "WAP125-J-K9-JP",
    version: "1.0.0.4",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "3758f225-05b3-4ecf-8b81-2a9167f2bd79",
          Ip: "156.1.1.71",
          L3InterfaceId: "041121e5-b7ab-4d89-85a7-5d432bc31aad"
        }
      ],
      Id: "041121e5-b7ab-4d89-85a7-5d432bc31aad",
      name: null,
      mac: "00:EB:D5:5E:03:80",
      ip: null,
      management: true,
      NodeId: "31ffeecb-ade6-461e-aeb2-b8bf91876764"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "5aea0552-65a3-4a0b-b727-24afdb3a42a7",
            Ip: "156.1.1.72",
            L3InterfaceId: "e14153b5-a6ec-4ec4-9f6a-157fad5cdc30"
          }
        ],
        Id: "e14153b5-a6ec-4ec4-9f6a-157fad5cdc30",
        name: null,
        mac: "00:EB:D5:60:12:A0",
        ip: null,
        management: true,
        NodeId: "58cbf87a-12f6-4dbb-949f-6d9258790d6b"
      }
    ],
    maintenance: {
      Id: "cbc61d48-eaba-425e-8e02-fdbe1b126d4f",
      NodeId: "58cbf87a-12f6-4dbb-949f-6d9258790d6b",
      status: "3508",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "1824336000000",
      warrantyEndDate: 1824336000000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "183b1d63-c608-4f2b-a117-2d8621e0921a",
        name: "backup",
        value: true
      },
      {
        Id: "cdf911f8-a2d0-4275-97be-bb7f403a74d1",
        name: "upgrade",
        value: true
      },
      {
        Id: "a71142d2-e84a-47ac-80af-e3546b0c072d",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "249bf6c9-d506-46c9-87f5-134cf6b2b64f",
      NodeId: "58cbf87a-12f6-4dbb-949f-6d9258790d6b",
      Overall: "warning"
    },
    tags: [],
    Id: "58cbf87a-12f6-4dbb-949f-6d9258790d6b",
    nodeId: "PID:WAP581-J-K9,VID:V01,SN:DNI2044A02E",
    serialNumber: "DNI2044A02E",
    hostname: "wap6012a0",
    modelId: "WAP581",
    nodeType: "WAP",
    productId: "WAP581-J-K9",
    version: "1.0.0.4",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "5aea0552-65a3-4a0b-b727-24afdb3a42a7",
          Ip: "156.1.1.72",
          L3InterfaceId: "e14153b5-a6ec-4ec4-9f6a-157fad5cdc30"
        }
      ],
      Id: "e14153b5-a6ec-4ec4-9f6a-157fad5cdc30",
      name: null,
      mac: "00:EB:D5:60:12:A0",
      ip: null,
      management: true,
      NodeId: "58cbf87a-12f6-4dbb-949f-6d9258790d6b"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "314414b5-21c5-4228-af61-a03c8d068652",
            Ip: "156.1.1.72",
            L3InterfaceId: "e04e9d0a-bea7-49e7-a199-0a2537011b5e"
          }
        ],
        Id: "e04e9d0a-bea7-49e7-a199-0a2537011b5e",
        name: null,
        mac: "00:EB:D5:60:12:A0",
        ip: null,
        management: true,
        NodeId: "f5d5a0bd-e42c-4e67-9ee8-fcc9625806a4"
      }
    ],
    maintenance: {
      Id: "bc4f5a9d-12cd-4c5d-a6e2-64ef47cbe179",
      NodeId: "f5d5a0bd-e42c-4e67-9ee8-fcc9625806a4",
      status: "3508",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "1824336000000",
      warrantyEndDate: 1824336000000
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "59f6fc91-3b2f-41ff-8524-2e57e5e09a0d",
        name: "reboot",
        value: true
      },
      {
        Id: "fd948bc9-817a-4337-a64b-b9d39968de5d",
        name: "upgrade",
        value: true
      },
      {
        Id: "17c9a6e1-dd41-49cd-a644-ea421a97aeba",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "1ae18f12-9c3c-4daf-9a21-1edbf3894b4f",
      NodeId: "f5d5a0bd-e42c-4e67-9ee8-fcc9625806a4",
      Overall: "warning"
    },
    tags: [],
    Id: "f5d5a0bd-e42c-4e67-9ee8-fcc9625806a4",
    nodeId: "PID:WAP581-J-K9,VID:V01,SN:DNI2044A02E",
    serialNumber: "DNI2044A02E",
    hostname: "wap6012a0",
    modelId: "WAP581",
    nodeType: "WAP",
    productId: "WAP581-J-K9",
    version: "1.0.0.4",
    updateVersion: "",
    vid: "V01",
    description: null,
    NetworkId: "aa730f90-6f4a-4319-b2c3-5874fd0e0cd3",
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "314414b5-21c5-4228-af61-a03c8d068652",
          Ip: "156.1.1.72",
          L3InterfaceId: "e04e9d0a-bea7-49e7-a199-0a2537011b5e"
        }
      ],
      Id: "e04e9d0a-bea7-49e7-a199-0a2537011b5e",
      name: null,
      mac: "00:EB:D5:60:12:A0",
      ip: null,
      management: true,
      NodeId: "f5d5a0bd-e42c-4e67-9ee8-fcc9625806a4"
    }
  }
];

// column definition for grid
const columns = [
  {
    key: "checkbox",
    name: (
      <input
        type="checkbox"
        /* checked={this.state.selectAll} */
        onChange={e => {
          this.setState({ selectAll: e.target.checked, checked: {} });
        }}
      />
    ),
    width: 50,
    isPrimary: true,
    sortable: false,
    filterable: false,
    formatter: node => (
      <input
        type="checkbox"
        /* checked={
          this.state.selectAll
            ? !this.state.checked[node.Id]
            : this.state.checked[node.Id]
        } */
        onChange={e => {
          e.stopPropagation();
          const next = Object.assign({}, this.state.checked);

          // next[node.Id] = this.state.selectAll
          //   ? !e.target.checked
          //   : e.target.checked;

          this.setState({ checked: next });
        }}
      />
    )
  },
  {
    key: "status",
    name: "Status",
    width: 75,
    isPrimary: true,
    filterable: false,
    sortable: false,
    formatter: node => {
      let color = "";

      switch (node.states.Overall.toLowerCase()) {
        case "error":
          color = "text-danger";
          break;
        case "warning":
          color = "text-warning";
          break;
        case "info":
          color = "text-success";
          break;
        default:
          color = "text-muted";
          break;
      }

      return (
        <button
          className="btn-no-style"
          bsSize="xsmall"
          //             onClick={(e) => {
          //               stopProp(e);
          //                launchNodeCrossLaunch(node.nodeId);
          //              }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`findit-icon findit-icon-${node.nodeType.toLowerCase()} ${color}`}
          />
        </button>
      );
    }
  },
  {
    key: "hostname",
    name: "Hostname",
    type: "text",
    width: 175,
    isPrimary: true,
    sortable: true,
    formatter: node => (
      <button
        bsSize="xsmall"
        bsStyle="default"
        onClick={e => {
          // states network id is our ID, not the FindIT id
          //                    const node = _.findWhere(node, {
          //                        Id: this.state.networkId,
          //                    });
          // launchNodeCrossLaunch(node.nodeId);
          // launchNetworkCrossLaunch(netowrk.networkId);
          // stopProp(e);
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-external-link" /> {node.hostname}
      </button>
    )
  },
  {
    name: "Device Type",
    key: "nodeType",
    type: "text",
    width: 160,
    isPrimary: true,
    filterable: false,
    formatter: node => {
      return "WWAP";
    }
  },
  {
    name: "IP Address",
    key: "Interfaces.IpAddresses",
    type: "text",
    width: 150,
    isPrimary: true,
    sortable: false,
    filterable: false,
    formatter: node => {
      if (
        !node.Interfaces ||
        !node.Interfaces.IpAddresses ||
        !node.Interfaces.IpAddresses[0]
      ) {
        return "";
      }

      return node.Interfaces.IpAddresses[0].Ip;
    }
  },
  {
    name: "Model",
    key: "modelId",
    type: "text",
    width: 150,
    isPrimary: true
  },
  {
    name: "MAC Address",
    key: "Interfaces.mac",
    type: "text",
    width: 150,
    sortable: false,
    filterable: false,
    isPrimary: true
  },
  {
    name: "Serial Number",
    key: "serialNumber",
    type: "text",
    width: 150,
    isPrimary: true
  },
  {
    name: "Current Firmware",
    key: "version",
    type: "text",
    width: 200,
    isPrimary: true
  },
  {
    name: "Firmware Available",
    key: "updateVersion",
    type: "text",
    width: 200,
    isPrimary: true
  },
  {
    key: "network",
    name: "Network",
    width: 180,
    isPrimary: true,
    sortable: false,
    filterable: false,
    formatter: () => (
      <button
        bsSize="xsmall"
        bsStyle="default"
        onClick={e => {
          // // states network id is our ID, not the FindIT id
          // const netowrk = _.findWhere(networks, {
          //   Id: this.state.networkId
          // });
          // launchNetworkCrossLaunch(netowrk.networkId);
          // stopProp(e);
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-external-link" />
      </button>
    )
  },
  {
    key: "actions",
    name: "Actions",
    width: 200,
    isPrimary: true,
    sortable: false,
    filterable: false,
    formatter: node => {
      // const { networkId } = this.state;
      if (!node.capabilities || !node.capabilities.length) {
        return (
          <div className="actions">
            {/* <Icon upgradeFirmware faded />
            <Icon saveConfig faded />
            <Icon remove faded />
            <Icon backupConfigs faded />
            <Icon reboot faded /> */}
          </div>
        );
      }

      return (
        <div className="actions">
          {/* <Icon
            upgradeFirmware
            faded={!ShowMarketing.nodeHasCapability(node, "upgrade")}
            title="Upgrade Firmware"
            onClick={e => {
              stopProp(e);
              if (ShowMarketing.nodeHasCapability(node, "upgrade")) {
                this.openModal(
                  `Confirm update firmware action for ${node.hostname}?`,
                  () => {
                    runAction("upgrade", node.Id, networkId);
                  }
                );
              }
            }}
          />
          <Icon
            saveConfig
            faded={!ShowMarketing.nodeHasCapability(node, "save-running")}
            title="Save Running Configuration"
            onClick={e => {
              stopProp(e);
              if (ShowMarketing.nodeHasCapability(node, "save-running")) {
                this.openModal(
                  `Confirm save running condition action for ${node.hostname}?`,
                  () => {
                    runAction("save-running", node.Id, networkId);
                  }
                );
              }
            }}
          />
          <Icon
            remove
            faded={!ShowMarketing.nodeHasCapability(node, "delete")}
            title="Delete"
            onClick={e => {
              stopProp(e);
              if (ShowMarketing.nodeHasCapability(node, "delete")) {
                this.openModal(
                  `Confirm delete action for ${node.hostname}?`,
                  () => {
                    runAction("delete", node.Id, networkId);
                  }
                );
              }
            }}
          />
          <Icon
            backupConfigs
            faded={!ShowMarketing.nodeHasCapability(node, "backup")}
            title="Backup"
            onClick={e => {
              stopProp(e);
              if (ShowMarketing.nodeHasCapability(node, "backup")) {
                this.openModal(
                  `Confirm backup action for ${node.hostname}?`,
                  () => {
                    runAction("backup", node.Id, networkId);
                  }
                );
              }
            }}
          />
          <Icon
            reboot
            faded={!ShowMarketing.nodeHasCapability(node, "reboot")}
            title="Reboot"
            onClick={e => {
              stopProp(e);
              if (ShowMarketing.nodeHasCapability(node, "reboot")) {
                this.openModal(
                  `Confirm reboot action for ${node.hostname}?`,
                  () => {
                    runAction("reboot", node.Id, networkId);
                  }
                );
              }
            }}
          /> */}
        </div>
      );
    }
  },
  {
    name: "End of Life Status",
    key: "Eox.CurrentState",
    type: "text",
    width: 200,
    formatter: item => {
      if (!item.eox) {
        return "-";
      }
      const { currentState } = item.eox;
      if (!currentState) {
        return "-";
      }

      // const myStatus = Eox.find(m => Number(m.id) === Number(currentState));

      return "-";
    }
  },
  {
    name: "Maintenance Status",
    key: "maintenance.status",
    type: "text",
    width: 200,
    formatter: item => {
      if (!item.maintenance) {
        return "-";
      }
      const { status } = item.maintenance;
      if (!status) {
        return "-";
      }

      return "-";
    }
  }
];

// data for the grid
const items2 = [
  {
    col1: "(1,1)",
    col2:
      "quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nul",
    col3: 1542203779000
  },
  { col1: "(1,2)", col2: "(2,2)", col3: 1501604957000 },
  { col1: "(1,3)", col2: "(2,3)", col3: 1501592534000 },
  { col1: "(1,4)", col2: "(2,4)", col3: 1501603876000 },
  { col1: "(1,5)", col2: "(2,5)", col3: 1501604957000 },
  { col1: "(1,6)", col2: "(2,6)", col3: 1501592534000 },
  { col1: "(1,7)", col2: "(2,7)", col3: 1501603876000 },
  { col1: "(1,8)", col2: "(2,8)", col3: 1501604957000 },
  { col1: "(1,9)", col2: "(2,9)", col3: 1501592534000 },
  { col1: "(1,10)", col2: "(2,10)", col3: 1501603876000 },
  { col1: "(1,11)", col2: "(2,11)", col3: 1501604957000 },
  { col1: "(1,12)", col2: "(2,12)", col3: 1501592534000 },
  { col1: "(1,13)", col2: "(2,13)", col3: 1501603876000 }
];

// column definition for grid
const columns2 = [
  { name: "Col 1", key: "col1", type: "string", isPrimary: true },
  { name: "Col 2", key: "col2", type: "string", isPrimary: true },
  {
    name: "Col 3",
    key: "col3",
    type: "dateTime"
    // formatter: event => moment(event.col3).format('M/D hh:mm')
  }
];

class PageExample extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      filter: {},
      sort: {}
    };

    this.pageSize = 5;
  }

  getRows(filtered) {
    const sorted = DataGrid.sortRows(filtered, columns2, this.state.sort);
    return _.first(
      _.rest(sorted, (this.state.currentPage - 1) * this.pageSize),
      this.pageSize
    );
  }

  getFilteredRows() {
    return items.filter(item => {
      let matches = true;
      _.each(this.state.filter, (value, key) => {
        matches = matches && item[key].includes(value.value);
      });

      return matches;
    });
  }

  render() {
    const filtered = this.getFilteredRows();
    const rows = this.getRows(filtered);
    console.log(rows);
    return (
      <div>
        <div className="grid-demo-header">
          <h1>Paged Demo</h1>
        </div>
        <div className="grid-demo">
          <DataGrid
            items={rows}
            columns={columns}
            totalItemCount={filtered.length}
            // measureAll
            paged
            pageSize={this.pageSize}
            currentPage={this.state.currentPage}
            // called with the props that have changed requiring a refresh
            // because of this, we need to check for existance and update our state accordingly
            onUpdateDataNeeded={({ page, filter, sort }) => {
              const updateObj = {};
              if (page) {
                updateObj.currentPage = page;
              }

              if (filter) {
                updateObj.filter = filter;
                updateObj.currentPage = 1;
              }

              if (sort) {
                updateObj.sort = sort;
                updateObj.currentPage = 1;
              }

              this.setState(updateObj);
            }}
          />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Data Grid</h2>
        </div>
        {/* <div>
          <div className="grid-demo-header">
            <h1>Basic Demo</h1>
          </div>
          <div className="grid-demo">
            <DataGrid items={items} columns={columns} />
          </div>
        </div>
        <div>
          <div className="grid-demo-header">
            <h1>Data Demo</h1>
          </div>
          <div className="grid-demo">
            <DataGrid items={items2} columns={columns2} />
          </div>
        </div> */}
        <PageExample />
      </div>
    );
  }
}

export default App;
