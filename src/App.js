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
            Id: "219fa38e-1964-48b5-bb4e-1bac8055d25a",
            Ip: "192.168.1.1",
            L3InterfaceId: "7c36ce75-9a31-4501-b851-5731a4d5577f"
          }
        ],
        Id: "7c36ce75-9a31-4501-b851-5731a4d5577f",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "277b394f-1263-4646-9b96-3499efe770e0"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "7abf7638-9c34-470f-838b-1a438e912be1",
        name: "upgrade",
        value: true
      },
      {
        Id: "6cb304ef-9395-4038-8a6e-84671bb87aa7",
        name: "backup",
        value: true
      },
      {
        Id: "cee5156c-37c3-4e12-a5e1-a2f30b0dbd50",
        name: "save-running",
        value: true
      },
      {
        Id: "a17d3450-86c2-44e9-b9e8-e23a4515bf9f",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "34f562de-f3f9-41bb-81a9-e50e3f61175c",
      NodeId: "277b394f-1263-4646-9b96-3499efe770e0",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "277b394f-1263-4646-9b96-3499efe770e0",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-101",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-101",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "219fa38e-1964-48b5-bb4e-1bac8055d25a",
          Ip: "192.168.1.1",
          L3InterfaceId: "7c36ce75-9a31-4501-b851-5731a4d5577f"
        }
      ],
      Id: "7c36ce75-9a31-4501-b851-5731a4d5577f",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "277b394f-1263-4646-9b96-3499efe770e0"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "0a873211-2811-4dfe-b4fc-b9496266ca06",
            Ip: "192.168.1.1",
            L3InterfaceId: "f464e9da-e6cb-4fd0-b35b-9cd7604f69eb"
          }
        ],
        Id: "f464e9da-e6cb-4fd0-b35b-9cd7604f69eb",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "3878f2e9-ed84-4cc1-b363-9d69ebb44377"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "d9d98cee-7e56-4a5d-8cc8-4e06dc21c342",
        name: "save-running",
        value: true
      },
      {
        Id: "4fcf11a6-c5da-471c-b804-af12987b5851",
        name: "upgrade",
        value: true
      },
      {
        Id: "1ec2e4c3-ac7b-412a-9208-b60f69976e0b",
        name: "reboot",
        value: true
      },
      {
        Id: "154b06b7-f3be-4bfb-8880-eb81bcf34102",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "0044c588-7d1e-4faf-8740-94a27704426a",
      NodeId: "3878f2e9-ed84-4cc1-b363-9d69ebb44377",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "3878f2e9-ed84-4cc1-b363-9d69ebb44377",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-102",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-102",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "0a873211-2811-4dfe-b4fc-b9496266ca06",
          Ip: "192.168.1.1",
          L3InterfaceId: "f464e9da-e6cb-4fd0-b35b-9cd7604f69eb"
        }
      ],
      Id: "f464e9da-e6cb-4fd0-b35b-9cd7604f69eb",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "3878f2e9-ed84-4cc1-b363-9d69ebb44377"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c42d3fbe-c8df-43a2-8141-da2feac7b3cc",
            Ip: "192.168.1.1",
            L3InterfaceId: "fe38967a-342a-4ad3-a0af-30d457318240"
          }
        ],
        Id: "fe38967a-342a-4ad3-a0af-30d457318240",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "212ad424-4ddf-48fa-8a01-3203f70bb256"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "458617fe-03d4-4cef-bad5-2c60c76c6ebd",
        name: "backup",
        value: true
      },
      {
        Id: "368b310a-e94a-47b8-a1b5-342f5471e5a0",
        name: "upgrade",
        value: true
      },
      {
        Id: "f159474f-d914-4665-80d4-7a25243bd405",
        name: "reboot",
        value: true
      },
      {
        Id: "9ba09642-4f2a-4f65-bee1-fb1a10b54f2e",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "3bd7ec55-47b9-4086-a76e-bba3c070c31f",
      NodeId: "212ad424-4ddf-48fa-8a01-3203f70bb256",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "212ad424-4ddf-48fa-8a01-3203f70bb256",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-103",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-103",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c42d3fbe-c8df-43a2-8141-da2feac7b3cc",
          Ip: "192.168.1.1",
          L3InterfaceId: "fe38967a-342a-4ad3-a0af-30d457318240"
        }
      ],
      Id: "fe38967a-342a-4ad3-a0af-30d457318240",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "212ad424-4ddf-48fa-8a01-3203f70bb256"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "f747173f-221b-412d-861f-0e345d685450",
            Ip: "192.168.1.1",
            L3InterfaceId: "00faf1f7-d271-4de2-b62f-2f76a93d62a0"
          }
        ],
        Id: "00faf1f7-d271-4de2-b62f-2f76a93d62a0",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "b5ca2a57-9c16-44a0-b903-1f51830b92f5"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "04619e61-a139-4e12-b5b3-158ceeee6851",
        name: "reboot",
        value: true
      },
      {
        Id: "8dcc5beb-8dba-4d2e-853e-5c88b45d2302",
        name: "upgrade",
        value: true
      },
      {
        Id: "51dd46db-9400-46c3-ae54-8b09818ff02a",
        name: "save-running",
        value: true
      },
      {
        Id: "ef0a9be0-f8f7-45fd-ae1f-9e596e887637",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "5091a077-d648-4dda-82d0-b97199e18730",
      NodeId: "b5ca2a57-9c16-44a0-b903-1f51830b92f5",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "b5ca2a57-9c16-44a0-b903-1f51830b92f5",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-104",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-104",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "f747173f-221b-412d-861f-0e345d685450",
          Ip: "192.168.1.1",
          L3InterfaceId: "00faf1f7-d271-4de2-b62f-2f76a93d62a0"
        }
      ],
      Id: "00faf1f7-d271-4de2-b62f-2f76a93d62a0",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "b5ca2a57-9c16-44a0-b903-1f51830b92f5"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "623ff6a9-2f15-429f-8464-8e70d03691f9",
            Ip: "192.168.1.1",
            L3InterfaceId: "e0914f65-0579-4ff6-ba77-f7c92e1b39c9"
          }
        ],
        Id: "e0914f65-0579-4ff6-ba77-f7c92e1b39c9",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "9e197897-6aed-4b75-8329-3e7a6e6a2aba"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "5535c91a-132d-4e46-9178-156f0bc740cb",
        name: "upgrade",
        value: true
      },
      {
        Id: "0d6a1c03-8c8a-40b8-9b29-3611209bae1b",
        name: "backup",
        value: true
      },
      {
        Id: "1b09eab8-01d2-4c77-9223-72c8f81ecca4",
        name: "reboot",
        value: true
      },
      {
        Id: "2ff6b990-1f7b-4cad-8424-d27b1077fc2e",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "8d05092f-e00d-4df5-9e4b-3273f97e1e38",
      NodeId: "9e197897-6aed-4b75-8329-3e7a6e6a2aba",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "9e197897-6aed-4b75-8329-3e7a6e6a2aba",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-105",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-105",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "623ff6a9-2f15-429f-8464-8e70d03691f9",
          Ip: "192.168.1.1",
          L3InterfaceId: "e0914f65-0579-4ff6-ba77-f7c92e1b39c9"
        }
      ],
      Id: "e0914f65-0579-4ff6-ba77-f7c92e1b39c9",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "9e197897-6aed-4b75-8329-3e7a6e6a2aba"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "939d619d-53bc-4df1-b87f-ed3b52dc6b88",
            Ip: "192.168.1.1",
            L3InterfaceId: "9fff1917-7ad1-40cf-a67a-f190f2bfcc89"
          }
        ],
        Id: "9fff1917-7ad1-40cf-a67a-f190f2bfcc89",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "a52598f7-9475-4e35-b49f-58d856262c2d"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "9a9f9e1a-3221-4c49-b922-1a24daa2a743",
        name: "save-running",
        value: true
      },
      {
        Id: "6826e8b3-9f6b-4e64-9ad2-5fa170ff8c0c",
        name: "reboot",
        value: true
      },
      {
        Id: "41b68da6-8026-42b7-9c45-64e8d53d2694",
        name: "upgrade",
        value: true
      },
      {
        Id: "9e5ae4c5-4d24-4ebf-a8e7-f0b072c3a625",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "b780de1d-5633-4e1a-852b-c84c1a4ab5a7",
      NodeId: "a52598f7-9475-4e35-b49f-58d856262c2d",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "a52598f7-9475-4e35-b49f-58d856262c2d",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-106",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-106",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "939d619d-53bc-4df1-b87f-ed3b52dc6b88",
          Ip: "192.168.1.1",
          L3InterfaceId: "9fff1917-7ad1-40cf-a67a-f190f2bfcc89"
        }
      ],
      Id: "9fff1917-7ad1-40cf-a67a-f190f2bfcc89",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "a52598f7-9475-4e35-b49f-58d856262c2d"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "0be20739-fec5-4110-b4b4-e1c9ef5d1669",
            Ip: "192.168.1.1",
            L3InterfaceId: "da7761e7-3e1d-44b8-9009-d6eb279e3258"
          }
        ],
        Id: "da7761e7-3e1d-44b8-9009-d6eb279e3258",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "93ab776b-4e38-4332-80d1-3a2b1dfd898a"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "d928b348-51f5-45c4-af93-09a484c55730",
        name: "backup",
        value: true
      },
      {
        Id: "02596722-d660-4fb3-9cc5-0c66c76baf43",
        name: "reboot",
        value: true
      },
      {
        Id: "6357d8d6-d88a-40e2-8c31-5c925e0e3016",
        name: "save-running",
        value: true
      },
      {
        Id: "73cace95-787a-4b04-b2c8-b2e172ec0990",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "f21858ef-ad00-4593-8ace-0a6591952090",
      NodeId: "93ab776b-4e38-4332-80d1-3a2b1dfd898a",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "93ab776b-4e38-4332-80d1-3a2b1dfd898a",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-107",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-107",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "0be20739-fec5-4110-b4b4-e1c9ef5d1669",
          Ip: "192.168.1.1",
          L3InterfaceId: "da7761e7-3e1d-44b8-9009-d6eb279e3258"
        }
      ],
      Id: "da7761e7-3e1d-44b8-9009-d6eb279e3258",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "93ab776b-4e38-4332-80d1-3a2b1dfd898a"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "ac7542da-467a-42b2-8536-7cf7f23e26d2",
            Ip: "192.168.1.1",
            L3InterfaceId: "281a2957-8226-4f55-823d-1585aedb3b86"
          }
        ],
        Id: "281a2957-8226-4f55-823d-1585aedb3b86",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "d4ec9302-78ce-4e94-9f45-7392daaac6ec"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "cef8bdbe-1d3e-4c19-8892-3b3e77d5b00f",
        name: "save-running",
        value: true
      },
      {
        Id: "dcc936c9-18d3-4e2e-a7eb-57c168f157c2",
        name: "backup",
        value: true
      },
      {
        Id: "c70692f4-be72-4ad2-b3be-7d1a8a7c0548",
        name: "upgrade",
        value: true
      },
      {
        Id: "2e956b77-ea81-4666-8838-dcfcce5db321",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "d5317fc6-5f65-4d0a-bcde-242946d28a4e",
      NodeId: "d4ec9302-78ce-4e94-9f45-7392daaac6ec",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "d4ec9302-78ce-4e94-9f45-7392daaac6ec",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-108",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-108",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "ac7542da-467a-42b2-8536-7cf7f23e26d2",
          Ip: "192.168.1.1",
          L3InterfaceId: "281a2957-8226-4f55-823d-1585aedb3b86"
        }
      ],
      Id: "281a2957-8226-4f55-823d-1585aedb3b86",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "d4ec9302-78ce-4e94-9f45-7392daaac6ec"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "0c394802-1fd9-4773-b432-f6404dcf104b",
            Ip: "192.168.1.1",
            L3InterfaceId: "0b199d07-4bc0-43ff-82f1-eacfe5c92cf7"
          }
        ],
        Id: "0b199d07-4bc0-43ff-82f1-eacfe5c92cf7",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "8406150b-9d61-4610-af42-667b0394ee98"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "ca11876e-c447-4676-a940-3dcc6f56691d",
        name: "reboot",
        value: true
      },
      {
        Id: "7ff39e6b-bae8-4e57-96cb-7c54c8db98e9",
        name: "upgrade",
        value: true
      },
      {
        Id: "2a0ca6a5-dfdb-4758-a36d-9b07a6b9995e",
        name: "backup",
        value: true
      },
      {
        Id: "53752214-6b50-4cc9-814f-fe1f570d9823",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "58ff3581-d552-4f98-9f86-c3a47f40cd4e",
      NodeId: "8406150b-9d61-4610-af42-667b0394ee98",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "8406150b-9d61-4610-af42-667b0394ee98",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-109",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-109",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "0c394802-1fd9-4773-b432-f6404dcf104b",
          Ip: "192.168.1.1",
          L3InterfaceId: "0b199d07-4bc0-43ff-82f1-eacfe5c92cf7"
        }
      ],
      Id: "0b199d07-4bc0-43ff-82f1-eacfe5c92cf7",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "8406150b-9d61-4610-af42-667b0394ee98"
    }
  },
  {
    alertConfigurations: [],
    eox: {
      Id: "ade0d042-2aef-4a11-9033-78f7d68fd645",
      currentState: "3304",
      dateOfAnnouncement: 1331164800000,
      lastDateOfSale: 1362700800000,
      lastDateOfRelease: 0,
      lastDateOfContract: 1394236800000,
      lastDateOfRenew: 1496707200000,
      lastDateOfSupport: 1522454400000,
      recommendedReplacementId: "GLC-SX-MMD=",
      recommendedReplacementUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/ps6577/product_data_sheet0900aecd8033f885.html",
      bulletinId: "EOL7727",
      bulletinUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/eol_c51-698060.html"
    },
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "b7fa9855-cb72-48ad-b4a9-2aa5bbd51515",
            Ip: "192.168.1.1",
            L3InterfaceId: "7b8e2e00-ea03-4a48-9c5c-3485dad7b5f4"
          }
        ],
        Id: "7b8e2e00-ea03-4a48-9c5c-3485dad7b5f4",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "bd74ad67-b63a-4c08-9410-9f060bf2399c"
      }
    ],
    maintenance: {
      Id: "1dc05df4-8bae-4967-9c58-aa39b154f4d2",
      NodeId: "bd74ad67-b63a-4c08-9410-9f060bf2399c",
      status: "3504",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "7342c93d-f532-4c59-bc20-1dbd2d74c97a",
        name: "upgrade",
        value: true
      },
      {
        Id: "f45f6a18-c44f-4e05-bbab-752ae2569718",
        name: "backup",
        value: true
      },
      {
        Id: "cc562eec-4d49-41c4-aec7-7fb0933567d7",
        name: "reboot",
        value: true
      },
      {
        Id: "f0ffaf3d-5b0c-4454-a276-9ed9532e533d",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "5692ed92-3448-4e66-bc4e-2feb4f214f47",
      NodeId: "bd74ad67-b63a-4c08-9410-9f060bf2399c",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "bd74ad67-b63a-4c08-9410-9f060bf2399c",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-110",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-110",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "1.0.01.1702",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "b7fa9855-cb72-48ad-b4a9-2aa5bbd51515",
          Ip: "192.168.1.1",
          L3InterfaceId: "7b8e2e00-ea03-4a48-9c5c-3485dad7b5f4"
        }
      ],
      Id: "7b8e2e00-ea03-4a48-9c5c-3485dad7b5f4",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "bd74ad67-b63a-4c08-9410-9f060bf2399c"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "a5fd9ede-3c2c-4937-83ff-191940563a22",
            Ip: "192.168.1.1",
            L3InterfaceId: "04bb9dc3-99b6-4652-ace8-4e04f16a276a"
          }
        ],
        Id: "04bb9dc3-99b6-4652-ace8-4e04f16a276a",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "163d8529-1377-45f9-8856-cfb66c1c0080"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "f7dedb7c-0243-42bb-90aa-54b0f785b5dc",
        name: "reboot",
        value: true
      },
      {
        Id: "17b2ebb4-efae-4a42-9670-7f6985b8ca29",
        name: "save-running",
        value: true
      },
      {
        Id: "eefca433-116a-4d18-81e8-c13c0a51556c",
        name: "upgrade",
        value: true
      },
      {
        Id: "a917abe5-c81c-4019-bf46-f28594744d2c",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "054d0484-6e16-417b-aba4-c5455470aeda",
      NodeId: "163d8529-1377-45f9-8856-cfb66c1c0080",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "163d8529-1377-45f9-8856-cfb66c1c0080",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-111",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-111",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "a5fd9ede-3c2c-4937-83ff-191940563a22",
          Ip: "192.168.1.1",
          L3InterfaceId: "04bb9dc3-99b6-4652-ace8-4e04f16a276a"
        }
      ],
      Id: "04bb9dc3-99b6-4652-ace8-4e04f16a276a",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "163d8529-1377-45f9-8856-cfb66c1c0080"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "cbad0244-a7fc-4f29-8274-a9c37e16a2f1",
            Ip: "192.168.1.1",
            L3InterfaceId: "94dda0d5-6717-4c03-a30d-60c5912b7a40"
          }
        ],
        Id: "94dda0d5-6717-4c03-a30d-60c5912b7a40",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "ba9f9e10-197c-44f7-bbfb-60aaf443c90f"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "628a4240-b2e1-42c2-987d-4e4a035b26e2",
        name: "reboot",
        value: true
      },
      {
        Id: "7730fc7a-bc7b-4336-8edc-7b57a146f21d",
        name: "save-running",
        value: true
      },
      {
        Id: "63fea456-3151-45ff-87db-adcaf32d073b",
        name: "backup",
        value: true
      },
      {
        Id: "8cf0fa93-fd03-4da0-a4ae-b702e6ca3dce",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "299b371d-dabf-4a8d-99aa-7e5e0dafcb80",
      NodeId: "ba9f9e10-197c-44f7-bbfb-60aaf443c90f",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "ba9f9e10-197c-44f7-bbfb-60aaf443c90f",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-112",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-112",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "cbad0244-a7fc-4f29-8274-a9c37e16a2f1",
          Ip: "192.168.1.1",
          L3InterfaceId: "94dda0d5-6717-4c03-a30d-60c5912b7a40"
        }
      ],
      Id: "94dda0d5-6717-4c03-a30d-60c5912b7a40",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "ba9f9e10-197c-44f7-bbfb-60aaf443c90f"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "b28fdac9-17ad-4a9f-9481-09648d981c13",
            Ip: "192.168.1.1",
            L3InterfaceId: "4488485a-3fb3-4e55-8c3c-f30cd79a11c4"
          }
        ],
        Id: "4488485a-3fb3-4e55-8c3c-f30cd79a11c4",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "c884e920-0291-49d4-b5ce-3e2bb93a12f0"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "7b0e08d0-e98e-457b-b0ec-19a17ac535ed",
        name: "backup",
        value: true
      },
      {
        Id: "444dd30e-ec3a-4925-8edd-773f65021ea4",
        name: "reboot",
        value: true
      },
      {
        Id: "235a0dee-321a-482c-8e87-91648e4ca644",
        name: "save-running",
        value: true
      },
      {
        Id: "2d48a445-4292-4733-b12f-aabfd7f2d3c3",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "74cf59bd-d418-48c5-8e9b-748ccfa2473f",
      NodeId: "c884e920-0291-49d4-b5ce-3e2bb93a12f0",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "c884e920-0291-49d4-b5ce-3e2bb93a12f0",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-113",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-113",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "b28fdac9-17ad-4a9f-9481-09648d981c13",
          Ip: "192.168.1.1",
          L3InterfaceId: "4488485a-3fb3-4e55-8c3c-f30cd79a11c4"
        }
      ],
      Id: "4488485a-3fb3-4e55-8c3c-f30cd79a11c4",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "c884e920-0291-49d4-b5ce-3e2bb93a12f0"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "22c51085-e79d-4145-baac-7981454bf88d",
            Ip: "192.168.1.1",
            L3InterfaceId: "7548b969-36fa-48c6-bd3d-f53efd2bbf9b"
          }
        ],
        Id: "7548b969-36fa-48c6-bd3d-f53efd2bbf9b",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "cc60d85e-2dad-43e9-9226-7217e90ee0b0"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "2c890c35-9b10-46f6-8ea6-1e04ff8227c8",
        name: "backup",
        value: true
      },
      {
        Id: "df050239-0ce6-480c-b027-2d10432c4f1b",
        name: "upgrade",
        value: true
      },
      {
        Id: "9859aa49-7016-4242-be41-4fb9085165bd",
        name: "save-running",
        value: true
      },
      {
        Id: "f23c202f-8d87-4a7b-9895-e6874fea8124",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "d1b7d613-0590-474d-ba5d-628ce3dc7ad7",
      NodeId: "cc60d85e-2dad-43e9-9226-7217e90ee0b0",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "cc60d85e-2dad-43e9-9226-7217e90ee0b0",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-114",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-114",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "22c51085-e79d-4145-baac-7981454bf88d",
          Ip: "192.168.1.1",
          L3InterfaceId: "7548b969-36fa-48c6-bd3d-f53efd2bbf9b"
        }
      ],
      Id: "7548b969-36fa-48c6-bd3d-f53efd2bbf9b",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "cc60d85e-2dad-43e9-9226-7217e90ee0b0"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "3936319e-271a-45d2-9e77-aebf472afd98",
            Ip: "192.168.1.1",
            L3InterfaceId: "3f081dee-b6a6-41cb-8791-cc07b0601295"
          }
        ],
        Id: "3f081dee-b6a6-41cb-8791-cc07b0601295",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "0e0d9802-2a72-4c45-bff1-bd9e71c89876"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "bf4d3190-e774-4933-9959-0adc673ee22d",
        name: "backup",
        value: true
      },
      {
        Id: "c68c14cb-17b7-4b1f-9181-164f696fa1cd",
        name: "reboot",
        value: true
      },
      {
        Id: "7ca12848-df44-42d0-b4b2-658a3e41cb42",
        name: "save-running",
        value: true
      },
      {
        Id: "1822a515-cf3f-4d59-a6fc-c465d5bb5b07",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "d098cb60-2e2e-4091-b038-2004dcb47153",
      NodeId: "0e0d9802-2a72-4c45-bff1-bd9e71c89876",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "0e0d9802-2a72-4c45-bff1-bd9e71c89876",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-115",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-115",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "3936319e-271a-45d2-9e77-aebf472afd98",
          Ip: "192.168.1.1",
          L3InterfaceId: "3f081dee-b6a6-41cb-8791-cc07b0601295"
        }
      ],
      Id: "3f081dee-b6a6-41cb-8791-cc07b0601295",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "0e0d9802-2a72-4c45-bff1-bd9e71c89876"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c571a561-42ce-4685-adb7-1905f75004a6",
            Ip: "192.168.1.1",
            L3InterfaceId: "506f009f-b125-418e-8a25-c36eb4749925"
          }
        ],
        Id: "506f009f-b125-418e-8a25-c36eb4749925",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "68ef4e2d-8f21-401b-adfc-81f01ac372c0"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "91508cb7-0602-48f2-91cb-51f4382cbf25",
        name: "save-running",
        value: true
      },
      {
        Id: "d1a3f190-3682-404c-88ec-58854b1bb9c9",
        name: "backup",
        value: true
      },
      {
        Id: "8d381978-09ce-4299-af21-69bb1bf227d9",
        name: "upgrade",
        value: true
      },
      {
        Id: "d430d565-cec8-498c-96a4-6b00f109b57a",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "11107ab5-b593-4f13-ac71-a4e51a44c66e",
      NodeId: "68ef4e2d-8f21-401b-adfc-81f01ac372c0",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "68ef4e2d-8f21-401b-adfc-81f01ac372c0",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-116",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-116",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c571a561-42ce-4685-adb7-1905f75004a6",
          Ip: "192.168.1.1",
          L3InterfaceId: "506f009f-b125-418e-8a25-c36eb4749925"
        }
      ],
      Id: "506f009f-b125-418e-8a25-c36eb4749925",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "68ef4e2d-8f21-401b-adfc-81f01ac372c0"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "5c166536-7f4b-4019-8bba-cbeca737dd2c",
            Ip: "192.168.1.1",
            L3InterfaceId: "ede8562b-567d-47f8-bb22-eb8e980b387f"
          }
        ],
        Id: "ede8562b-567d-47f8-bb22-eb8e980b387f",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "995b9e53-a38e-4332-b56c-0bdc483736bd"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "0ff26d42-0c07-45ec-801e-2235939cbd08",
        name: "save-running",
        value: true
      },
      {
        Id: "003df8e1-2039-43e0-9f5a-693839c4b2c1",
        name: "reboot",
        value: true
      },
      {
        Id: "df95e741-65a5-40bd-950a-838b9eb980fd",
        name: "backup",
        value: true
      },
      {
        Id: "2c8d1514-ad9f-4644-9b73-f39b42f48e05",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "e7fc583a-ce3d-4389-9801-13fbb8e9da03",
      NodeId: "995b9e53-a38e-4332-b56c-0bdc483736bd",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "995b9e53-a38e-4332-b56c-0bdc483736bd",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-117",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-117",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "5c166536-7f4b-4019-8bba-cbeca737dd2c",
          Ip: "192.168.1.1",
          L3InterfaceId: "ede8562b-567d-47f8-bb22-eb8e980b387f"
        }
      ],
      Id: "ede8562b-567d-47f8-bb22-eb8e980b387f",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "995b9e53-a38e-4332-b56c-0bdc483736bd"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "f91623ef-e18a-43e5-a23a-44cfbcc1e6ee",
            Ip: "192.168.1.1",
            L3InterfaceId: "64a31b86-c418-4a47-a8bf-62661a2dffb2"
          }
        ],
        Id: "64a31b86-c418-4a47-a8bf-62661a2dffb2",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "fca507dc-0ee1-40ad-bb49-73378396b035"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "e62afc3b-c340-4941-896f-555671ec31e9",
        name: "backup",
        value: true
      },
      {
        Id: "3f973e15-f8fd-4eb5-b143-5bb06df31966",
        name: "reboot",
        value: true
      },
      {
        Id: "845b721d-35d7-4bc3-a64f-a07a12d4254c",
        name: "save-running",
        value: true
      },
      {
        Id: "89476839-81d8-4a7d-89d1-b013229c3f9c",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "d2bebafc-df1e-4a3c-a8fe-5b45f7880fa1",
      NodeId: "fca507dc-0ee1-40ad-bb49-73378396b035",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "fca507dc-0ee1-40ad-bb49-73378396b035",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-118",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-118",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "f91623ef-e18a-43e5-a23a-44cfbcc1e6ee",
          Ip: "192.168.1.1",
          L3InterfaceId: "64a31b86-c418-4a47-a8bf-62661a2dffb2"
        }
      ],
      Id: "64a31b86-c418-4a47-a8bf-62661a2dffb2",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "fca507dc-0ee1-40ad-bb49-73378396b035"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "eab32900-4378-4a74-b5c6-0777717c3d8f",
            Ip: "192.168.1.1",
            L3InterfaceId: "ab803692-6dce-4bcb-a94e-935a0e48a619"
          }
        ],
        Id: "ab803692-6dce-4bcb-a94e-935a0e48a619",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "9bd63e98-3db8-4d0c-9cb1-808fdfae853d"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "c0f66917-17e8-4ae8-a08b-179c133a2bf6",
        name: "reboot",
        value: true
      },
      {
        Id: "adcd8962-45e2-4461-8685-5199960abc0e",
        name: "save-running",
        value: true
      },
      {
        Id: "a491e0e4-11df-4713-b10b-9f93b6fb6918",
        name: "upgrade",
        value: true
      },
      {
        Id: "49904f3c-0388-4e18-b11f-d6e9deb047b9",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "18291bae-0fc3-4b89-b3bb-5b17a1868ce5",
      NodeId: "9bd63e98-3db8-4d0c-9cb1-808fdfae853d",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "9bd63e98-3db8-4d0c-9cb1-808fdfae853d",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-119",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-119",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "eab32900-4378-4a74-b5c6-0777717c3d8f",
          Ip: "192.168.1.1",
          L3InterfaceId: "ab803692-6dce-4bcb-a94e-935a0e48a619"
        }
      ],
      Id: "ab803692-6dce-4bcb-a94e-935a0e48a619",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "9bd63e98-3db8-4d0c-9cb1-808fdfae853d"
    }
  },
  {
    alertConfigurations: [],
    eox: {
      Id: "a79dd8f1-d2c6-41fa-b0f3-d42e650bd201",
      currentState: "3304",
      dateOfAnnouncement: 1331164800000,
      lastDateOfSale: 1362700800000,
      lastDateOfRelease: 0,
      lastDateOfContract: 1394236800000,
      lastDateOfRenew: 1496707200000,
      lastDateOfSupport: 1522454400000,
      recommendedReplacementId: "GLC-SX-MMD=",
      recommendedReplacementUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/ps6577/product_data_sheet0900aecd8033f885.html",
      bulletinId: "EOL7727",
      bulletinUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/eol_c51-698060.html"
    },
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "8c4d6419-aed8-4ed0-8a23-9b56c7c31760",
            Ip: "192.168.1.1",
            L3InterfaceId: "77ac43ae-3739-44da-9b60-98873f994f81"
          }
        ],
        Id: "77ac43ae-3739-44da-9b60-98873f994f81",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "effcc5da-0e8d-4ca7-afc2-c4aa8dad8344"
      }
    ],
    maintenance: {
      Id: "9e4fd6d5-2dd2-4439-880e-0ac98bc33f61",
      NodeId: "effcc5da-0e8d-4ca7-afc2-c4aa8dad8344",
      status: "3504",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "bff25f45-ad66-493f-ae1d-37cd7ae976b1",
        name: "reboot",
        value: true
      },
      {
        Id: "7d3102c3-a656-4a42-805d-966999917f3b",
        name: "upgrade",
        value: true
      },
      {
        Id: "e052eabe-43f4-4e13-bd7c-9fc22c9443a5",
        name: "save-running",
        value: true
      },
      {
        Id: "6b0c7838-673f-42ab-b59a-afeed8b08955",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "f0ad1387-24a4-4260-81ab-afee4a683dbc",
      NodeId: "effcc5da-0e8d-4ca7-afc2-c4aa8dad8344",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "effcc5da-0e8d-4ca7-afc2-c4aa8dad8344",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-120",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-120",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "1.0.01.1702",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "8c4d6419-aed8-4ed0-8a23-9b56c7c31760",
          Ip: "192.168.1.1",
          L3InterfaceId: "77ac43ae-3739-44da-9b60-98873f994f81"
        }
      ],
      Id: "77ac43ae-3739-44da-9b60-98873f994f81",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "effcc5da-0e8d-4ca7-afc2-c4aa8dad8344"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "bf422cc0-cf42-4cac-a1ae-57db9d0d61ae",
            Ip: "192.168.1.1",
            L3InterfaceId: "48729fb3-7cdf-478e-9eb1-12529befec17"
          }
        ],
        Id: "48729fb3-7cdf-478e-9eb1-12529befec17",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "5ce95232-09dd-41b4-b31d-2e8ae367a273"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "88f7408b-2e98-4c4b-9d0a-2326641f2ccb",
        name: "reboot",
        value: true
      },
      {
        Id: "b0a51e6a-01df-4dde-a594-31eba091f890",
        name: "save-running",
        value: true
      },
      {
        Id: "62da458e-64f2-414a-a2ef-4c62f83ec3d4",
        name: "backup",
        value: true
      },
      {
        Id: "3ee08954-c482-4021-8b97-cb8628cc5fcb",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "3e8a7c6f-3a2e-40e5-b245-054c65e6be48",
      NodeId: "5ce95232-09dd-41b4-b31d-2e8ae367a273",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "5ce95232-09dd-41b4-b31d-2e8ae367a273",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-121",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-121",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "bf422cc0-cf42-4cac-a1ae-57db9d0d61ae",
          Ip: "192.168.1.1",
          L3InterfaceId: "48729fb3-7cdf-478e-9eb1-12529befec17"
        }
      ],
      Id: "48729fb3-7cdf-478e-9eb1-12529befec17",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "5ce95232-09dd-41b4-b31d-2e8ae367a273"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "874a1746-2a2d-4ab5-b763-067892dd365e",
            Ip: "192.168.1.1",
            L3InterfaceId: "7082d915-404b-4b8e-bda1-068c1ed754a0"
          }
        ],
        Id: "7082d915-404b-4b8e-bda1-068c1ed754a0",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "61e12617-d217-4b7c-835d-d2f734882b30"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "a455e694-3171-4ab4-aff0-055113cce44a",
        name: "upgrade",
        value: true
      },
      {
        Id: "dbd33bcd-7ec9-4bcd-b803-67cf422f64c4",
        name: "backup",
        value: true
      },
      {
        Id: "09fad000-fdcd-4984-9da3-af158c29496d",
        name: "save-running",
        value: true
      },
      {
        Id: "f9ac053a-16e0-407c-ad2b-fb82629e0763",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "0afc01b7-1d9b-4a57-8eb9-85ec01db1d7e",
      NodeId: "61e12617-d217-4b7c-835d-d2f734882b30",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "61e12617-d217-4b7c-835d-d2f734882b30",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-122",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-122",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "874a1746-2a2d-4ab5-b763-067892dd365e",
          Ip: "192.168.1.1",
          L3InterfaceId: "7082d915-404b-4b8e-bda1-068c1ed754a0"
        }
      ],
      Id: "7082d915-404b-4b8e-bda1-068c1ed754a0",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "61e12617-d217-4b7c-835d-d2f734882b30"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "fcb28ef0-5625-48e1-9b6a-9edd4fa0bdda",
            Ip: "192.168.1.1",
            L3InterfaceId: "13d9a959-e6bf-46ad-840f-199619a11926"
          }
        ],
        Id: "13d9a959-e6bf-46ad-840f-199619a11926",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "1d5ac0e3-b359-459a-8413-6ba0576037c6"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "fc77f2b8-4b8d-4b97-bfd9-085dc811d7d8",
        name: "backup",
        value: true
      },
      {
        Id: "823106c4-c7fc-47be-8eef-1b6b0674059b",
        name: "upgrade",
        value: true
      },
      {
        Id: "adcf5166-7f3d-40d7-8b2d-56d9e6c77a9f",
        name: "save-running",
        value: true
      },
      {
        Id: "86db36c6-fb60-4a5a-80da-f27cd1cf8192",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "328330cc-8d8f-4fa1-9be8-c399caaaad03",
      NodeId: "1d5ac0e3-b359-459a-8413-6ba0576037c6",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "1d5ac0e3-b359-459a-8413-6ba0576037c6",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-123",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-123",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "fcb28ef0-5625-48e1-9b6a-9edd4fa0bdda",
          Ip: "192.168.1.1",
          L3InterfaceId: "13d9a959-e6bf-46ad-840f-199619a11926"
        }
      ],
      Id: "13d9a959-e6bf-46ad-840f-199619a11926",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "1d5ac0e3-b359-459a-8413-6ba0576037c6"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "d85664a0-5145-4c03-bf96-0a3da5512442",
            Ip: "192.168.1.1",
            L3InterfaceId: "f739115f-bdb7-498c-a0ed-9a4753f9ed5b"
          }
        ],
        Id: "f739115f-bdb7-498c-a0ed-9a4753f9ed5b",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "2f389e6f-c232-4673-8023-196396404e02"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "fa154871-b5dc-4a59-9231-44daba4baa18",
        name: "save-running",
        value: true
      },
      {
        Id: "b814a1f1-277d-4f91-a3fb-64f68a77bc1f",
        name: "upgrade",
        value: true
      },
      {
        Id: "b7203e2d-91ab-48b0-989d-8c172dd25412",
        name: "reboot",
        value: true
      },
      {
        Id: "db1abd52-6169-482a-9a9d-e64ad9e57b50",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "7e55619f-7f42-4952-90bc-571d00dfb3dc",
      NodeId: "2f389e6f-c232-4673-8023-196396404e02",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "2f389e6f-c232-4673-8023-196396404e02",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-124",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-124",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "d85664a0-5145-4c03-bf96-0a3da5512442",
          Ip: "192.168.1.1",
          L3InterfaceId: "f739115f-bdb7-498c-a0ed-9a4753f9ed5b"
        }
      ],
      Id: "f739115f-bdb7-498c-a0ed-9a4753f9ed5b",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "2f389e6f-c232-4673-8023-196396404e02"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "cb2014a8-2c1f-46ee-8a6d-5c38cd4fa007",
            Ip: "192.168.1.1",
            L3InterfaceId: "3f612d24-1068-4c59-a406-9a744f04abc9"
          }
        ],
        Id: "3f612d24-1068-4c59-a406-9a744f04abc9",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "f472a8a9-9e56-4748-b9df-97f09310d5f0"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "5aca4af0-7c2e-4239-afb1-3caf03f23cb3",
        name: "backup",
        value: true
      },
      {
        Id: "961909ea-4fb5-4548-b53f-78575a58a584",
        name: "upgrade",
        value: true
      },
      {
        Id: "9d6b0236-95ee-4ab3-a0b8-daa5067eb6c5",
        name: "save-running",
        value: true
      },
      {
        Id: "08271c53-6bb2-4fc6-81ca-eeb1c41aa2e8",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "ab436ba7-76b1-4124-8f79-ae8f7ed1111d",
      NodeId: "f472a8a9-9e56-4748-b9df-97f09310d5f0",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "f472a8a9-9e56-4748-b9df-97f09310d5f0",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-125",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-125",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "cb2014a8-2c1f-46ee-8a6d-5c38cd4fa007",
          Ip: "192.168.1.1",
          L3InterfaceId: "3f612d24-1068-4c59-a406-9a744f04abc9"
        }
      ],
      Id: "3f612d24-1068-4c59-a406-9a744f04abc9",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "f472a8a9-9e56-4748-b9df-97f09310d5f0"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "5670adf4-5c9d-4429-8218-086bcb9e8dc8",
            Ip: "192.168.1.1",
            L3InterfaceId: "de897cb3-079d-458e-a16d-43b2ab3ff1cc"
          }
        ],
        Id: "de897cb3-079d-458e-a16d-43b2ab3ff1cc",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "5ae09f23-f241-4779-ba80-ec4c958404b4"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "c8079e8a-a9eb-4cec-b147-4528dd63c2ae",
        name: "save-running",
        value: true
      },
      {
        Id: "82e1abcf-746d-43cc-9e1e-45ac547e0159",
        name: "backup",
        value: true
      },
      {
        Id: "6bfed463-271f-4168-8e17-61db1e36f231",
        name: "upgrade",
        value: true
      },
      {
        Id: "35eef5cf-f7c6-4309-8c37-7a9934b9fd45",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "c0e9fb79-7d01-439c-8338-e4a6ca575151",
      NodeId: "5ae09f23-f241-4779-ba80-ec4c958404b4",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "5ae09f23-f241-4779-ba80-ec4c958404b4",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-126",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-126",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "5670adf4-5c9d-4429-8218-086bcb9e8dc8",
          Ip: "192.168.1.1",
          L3InterfaceId: "de897cb3-079d-458e-a16d-43b2ab3ff1cc"
        }
      ],
      Id: "de897cb3-079d-458e-a16d-43b2ab3ff1cc",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "5ae09f23-f241-4779-ba80-ec4c958404b4"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "bce54461-42ce-4e08-8d1c-182cc47a827e",
            Ip: "192.168.1.1",
            L3InterfaceId: "b654dc27-4825-47bb-9e22-8d1b8aee024b"
          }
        ],
        Id: "b654dc27-4825-47bb-9e22-8d1b8aee024b",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "e35345cc-3c7c-490e-99c2-1466a5e80612"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "41861b3a-09cf-452a-80bd-520e1788e1b8",
        name: "reboot",
        value: true
      },
      {
        Id: "6638b0f6-7f20-4820-907e-bacef38b6e56",
        name: "backup",
        value: true
      },
      {
        Id: "423e519b-5425-4fec-995c-f2804b530cd3",
        name: "upgrade",
        value: true
      },
      {
        Id: "7becbb69-5ab5-4a67-972d-fdb4760db53d",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "bdbe485d-33b7-482b-9f66-85ba8706d4eb",
      NodeId: "e35345cc-3c7c-490e-99c2-1466a5e80612",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "e35345cc-3c7c-490e-99c2-1466a5e80612",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-127",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-127",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "bce54461-42ce-4e08-8d1c-182cc47a827e",
          Ip: "192.168.1.1",
          L3InterfaceId: "b654dc27-4825-47bb-9e22-8d1b8aee024b"
        }
      ],
      Id: "b654dc27-4825-47bb-9e22-8d1b8aee024b",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "e35345cc-3c7c-490e-99c2-1466a5e80612"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "7a0062dd-f57d-430e-b8b9-1e9b13fe1855",
            Ip: "192.168.1.1",
            L3InterfaceId: "ee311005-6889-4acb-8bc8-b2c8dff7322a"
          }
        ],
        Id: "ee311005-6889-4acb-8bc8-b2c8dff7322a",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "04ba2563-a7ba-4912-86a5-397016c5765b"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "4ffa70af-583a-4dfa-a619-4fe921420328",
        name: "reboot",
        value: true
      },
      {
        Id: "5d78d62b-3079-4c94-ba1e-57643d3f1e16",
        name: "upgrade",
        value: true
      },
      {
        Id: "adb39d12-1eef-4ff7-8a5d-85730fc5722b",
        name: "save-running",
        value: true
      },
      {
        Id: "faf0c1cb-2a6f-497d-8ab6-c373015bb8ed",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "cd0b9056-0992-4645-ac16-aa8f3dd16edf",
      NodeId: "04ba2563-a7ba-4912-86a5-397016c5765b",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "04ba2563-a7ba-4912-86a5-397016c5765b",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-128",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-128",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "7a0062dd-f57d-430e-b8b9-1e9b13fe1855",
          Ip: "192.168.1.1",
          L3InterfaceId: "ee311005-6889-4acb-8bc8-b2c8dff7322a"
        }
      ],
      Id: "ee311005-6889-4acb-8bc8-b2c8dff7322a",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "04ba2563-a7ba-4912-86a5-397016c5765b"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "a1becc7c-f5ac-43fb-9c50-78e792e16404",
            Ip: "192.168.1.1",
            L3InterfaceId: "a13ac6c1-eda2-4811-93dd-8831a799233a"
          }
        ],
        Id: "a13ac6c1-eda2-4811-93dd-8831a799233a",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "ba6de516-8953-4fd5-ada3-61ddc44b1a67"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "7c2042df-9184-450b-995c-46a49b749f25",
        name: "reboot",
        value: true
      },
      {
        Id: "758d90df-68ae-4104-9931-b655cc991f79",
        name: "save-running",
        value: true
      },
      {
        Id: "b41d1628-4d41-4638-8437-f45cb75305f4",
        name: "backup",
        value: true
      },
      {
        Id: "8498f4fe-1c98-4970-b3e4-f6af0caabd99",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "b9e4b8e5-33f9-4c99-88b9-c2d2f9c67b14",
      NodeId: "ba6de516-8953-4fd5-ada3-61ddc44b1a67",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "ba6de516-8953-4fd5-ada3-61ddc44b1a67",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-129",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-129",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "a1becc7c-f5ac-43fb-9c50-78e792e16404",
          Ip: "192.168.1.1",
          L3InterfaceId: "a13ac6c1-eda2-4811-93dd-8831a799233a"
        }
      ],
      Id: "a13ac6c1-eda2-4811-93dd-8831a799233a",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "ba6de516-8953-4fd5-ada3-61ddc44b1a67"
    }
  },
  {
    alertConfigurations: [],
    eox: {
      Id: "3ce7d943-59b3-4a00-a935-6260bf8dc67f",
      currentState: "3304",
      dateOfAnnouncement: 1331164800000,
      lastDateOfSale: 1362700800000,
      lastDateOfRelease: 0,
      lastDateOfContract: 1394236800000,
      lastDateOfRenew: 1496707200000,
      lastDateOfSupport: 1522454400000,
      recommendedReplacementId: "GLC-SX-MMD=",
      recommendedReplacementUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/ps6577/product_data_sheet0900aecd8033f885.html",
      bulletinId: "EOL7727",
      bulletinUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/eol_c51-698060.html"
    },
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c22ec443-e93a-4608-923f-33580ca19545",
            Ip: "192.168.1.1",
            L3InterfaceId: "c1022447-7a42-444f-b1e2-6ec6f8f6f39d"
          }
        ],
        Id: "c1022447-7a42-444f-b1e2-6ec6f8f6f39d",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "f03cc921-588f-4214-8c56-e833e78b3a19"
      }
    ],
    maintenance: {
      Id: "b82bc48c-2d4b-427f-a3ec-87ed8a121a37",
      NodeId: "f03cc921-588f-4214-8c56-e833e78b3a19",
      status: "3504",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "faaf276f-fd7a-4973-809d-457705741ba4",
        name: "save-running",
        value: true
      },
      {
        Id: "793cc6ee-846f-407d-a1c9-78e3eeba3254",
        name: "backup",
        value: true
      },
      {
        Id: "9f7727f5-186d-475b-9170-7d5b03ac3485",
        name: "upgrade",
        value: true
      },
      {
        Id: "e6efdd46-fb85-463b-b2d2-88c8edb1600f",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "57bf4276-00ad-4e5c-ad36-8d05c5efbcb6",
      NodeId: "f03cc921-588f-4214-8c56-e833e78b3a19",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "f03cc921-588f-4214-8c56-e833e78b3a19",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-130",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-130",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "1.0.01.1702",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c22ec443-e93a-4608-923f-33580ca19545",
          Ip: "192.168.1.1",
          L3InterfaceId: "c1022447-7a42-444f-b1e2-6ec6f8f6f39d"
        }
      ],
      Id: "c1022447-7a42-444f-b1e2-6ec6f8f6f39d",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "f03cc921-588f-4214-8c56-e833e78b3a19"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "ea4eae6a-286d-4350-84e3-fcff3a88ca10",
            Ip: "192.168.1.1",
            L3InterfaceId: "09eba4af-d5ab-462e-a36d-cb54b9865cbc"
          }
        ],
        Id: "09eba4af-d5ab-462e-a36d-cb54b9865cbc",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "712374b3-c63e-42b0-bf66-9a9cede0050b"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "4cc51bf6-e96a-4a42-838c-2cfcadecf7a2",
        name: "upgrade",
        value: true
      },
      {
        Id: "92280b57-3b5e-4463-9d03-6a1f5a6ddc93",
        name: "reboot",
        value: true
      },
      {
        Id: "d95ac51e-ad21-4783-845b-766bbf0cd10d",
        name: "save-running",
        value: true
      },
      {
        Id: "1e3c7b59-628c-4dbb-9eb5-7c29c9a0ee36",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "babfd27f-8ffc-468a-9ee6-6b3cd6f4c667",
      NodeId: "712374b3-c63e-42b0-bf66-9a9cede0050b",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "712374b3-c63e-42b0-bf66-9a9cede0050b",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-131",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-131",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "ea4eae6a-286d-4350-84e3-fcff3a88ca10",
          Ip: "192.168.1.1",
          L3InterfaceId: "09eba4af-d5ab-462e-a36d-cb54b9865cbc"
        }
      ],
      Id: "09eba4af-d5ab-462e-a36d-cb54b9865cbc",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "712374b3-c63e-42b0-bf66-9a9cede0050b"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "29e94a6b-b105-4c8f-8a22-17d8aebc3f63",
            Ip: "192.168.1.1",
            L3InterfaceId: "c9320f2a-109b-47e0-98f7-eebf62e04a1f"
          }
        ],
        Id: "c9320f2a-109b-47e0-98f7-eebf62e04a1f",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "3a1ca9a1-3426-4098-834f-83c1007db8cc"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "ed6c2b85-93de-45a7-8721-1a35e2489976",
        name: "reboot",
        value: true
      },
      {
        Id: "47c5cc57-abe3-4fd0-b386-2d57ccb37145",
        name: "upgrade",
        value: true
      },
      {
        Id: "ebc456fc-1c28-4b13-bb6c-bb311926b155",
        name: "backup",
        value: true
      },
      {
        Id: "9099ede5-d491-4096-bc54-e1965c6e3e31",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "ad59347c-98c5-4d14-b239-808b91bee872",
      NodeId: "3a1ca9a1-3426-4098-834f-83c1007db8cc",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "3a1ca9a1-3426-4098-834f-83c1007db8cc",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-132",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-132",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "29e94a6b-b105-4c8f-8a22-17d8aebc3f63",
          Ip: "192.168.1.1",
          L3InterfaceId: "c9320f2a-109b-47e0-98f7-eebf62e04a1f"
        }
      ],
      Id: "c9320f2a-109b-47e0-98f7-eebf62e04a1f",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "3a1ca9a1-3426-4098-834f-83c1007db8cc"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "a9e9e348-b596-40ec-83ca-23322ce887ec",
            Ip: "192.168.1.1",
            L3InterfaceId: "7a6dd251-790e-4975-b3d2-09861d7d0a53"
          }
        ],
        Id: "7a6dd251-790e-4975-b3d2-09861d7d0a53",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "91795e9a-6fe0-4b99-af83-48c1e29cac6e"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "3529c3b4-13c8-44b2-b7e2-12a5dec36c18",
        name: "save-running",
        value: true
      },
      {
        Id: "1fb998db-bf32-4e94-b546-c72bae034712",
        name: "upgrade",
        value: true
      },
      {
        Id: "ec804dfa-710f-4fcb-a70a-dcaa08c27887",
        name: "reboot",
        value: true
      },
      {
        Id: "88d583fd-99ca-4ca7-97c8-df01ab39b394",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "45dc4e8b-21a1-4071-9929-4625c2875cda",
      NodeId: "91795e9a-6fe0-4b99-af83-48c1e29cac6e",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "91795e9a-6fe0-4b99-af83-48c1e29cac6e",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-133",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-133",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "a9e9e348-b596-40ec-83ca-23322ce887ec",
          Ip: "192.168.1.1",
          L3InterfaceId: "7a6dd251-790e-4975-b3d2-09861d7d0a53"
        }
      ],
      Id: "7a6dd251-790e-4975-b3d2-09861d7d0a53",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "91795e9a-6fe0-4b99-af83-48c1e29cac6e"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "229786cb-d933-495f-9540-4fade59e52dc",
            Ip: "192.168.1.1",
            L3InterfaceId: "33ae86f3-a1c2-4f76-b260-2c2125de0772"
          }
        ],
        Id: "33ae86f3-a1c2-4f76-b260-2c2125de0772",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "daadc53f-572c-435d-a8e2-0e67b08fea78"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "2fbbf7b3-7750-42b0-abda-05911d5e1716",
        name: "backup",
        value: true
      },
      {
        Id: "774eda8f-cf39-4e7a-9aee-13771109cd9b",
        name: "save-running",
        value: true
      },
      {
        Id: "ab2a88ce-b588-4cfb-8d83-a19ef1a3b851",
        name: "upgrade",
        value: true
      },
      {
        Id: "6af018eb-fe33-4e65-80a1-ecf021bb5856",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "2f013c1f-b783-4bba-b7f8-5e26c64f93f3",
      NodeId: "daadc53f-572c-435d-a8e2-0e67b08fea78",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "daadc53f-572c-435d-a8e2-0e67b08fea78",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-134",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-134",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "229786cb-d933-495f-9540-4fade59e52dc",
          Ip: "192.168.1.1",
          L3InterfaceId: "33ae86f3-a1c2-4f76-b260-2c2125de0772"
        }
      ],
      Id: "33ae86f3-a1c2-4f76-b260-2c2125de0772",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "daadc53f-572c-435d-a8e2-0e67b08fea78"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "b50f69ee-6097-4a07-9e62-44625684e423",
            Ip: "192.168.1.1",
            L3InterfaceId: "6c07f293-fa39-4799-9e9f-8d429cf6886e"
          }
        ],
        Id: "6c07f293-fa39-4799-9e9f-8d429cf6886e",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "a7f29e51-5fb2-48fd-b5b3-d90d32489230"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "a76770f9-d0ee-469e-a271-311082ddefde",
        name: "reboot",
        value: true
      },
      {
        Id: "5b99c933-33a1-4833-9a3c-aa5d7c0428d9",
        name: "backup",
        value: true
      },
      {
        Id: "4317cb9a-a05d-4b17-b4ee-c863a1e5bda4",
        name: "save-running",
        value: true
      },
      {
        Id: "05af1f57-91f9-4d54-9fc0-cc004c1b2e00",
        name: "upgrade",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "b8d10a75-ca82-4ee6-b700-d91fc5c1818e",
      NodeId: "a7f29e51-5fb2-48fd-b5b3-d90d32489230",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "a7f29e51-5fb2-48fd-b5b3-d90d32489230",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-135",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-135",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "b50f69ee-6097-4a07-9e62-44625684e423",
          Ip: "192.168.1.1",
          L3InterfaceId: "6c07f293-fa39-4799-9e9f-8d429cf6886e"
        }
      ],
      Id: "6c07f293-fa39-4799-9e9f-8d429cf6886e",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "a7f29e51-5fb2-48fd-b5b3-d90d32489230"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "0093cec5-4864-4402-9062-b4fde5378947",
            Ip: "192.168.1.1",
            L3InterfaceId: "26d2f663-e1f3-4684-a7fb-8cafc13d6e39"
          }
        ],
        Id: "26d2f663-e1f3-4684-a7fb-8cafc13d6e39",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "033fc6ab-c302-41db-96d5-baa0d5dfdcec"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "e250f551-efa9-4f16-828e-0c0114a5a834",
        name: "upgrade",
        value: true
      },
      {
        Id: "693cd592-d15a-49c1-bddd-85d9bcf76d19",
        name: "reboot",
        value: true
      },
      {
        Id: "40213909-56e1-4ab5-8a35-c3d542cbb140",
        name: "backup",
        value: true
      },
      {
        Id: "42912ea0-d6b9-4566-85ef-e9e8b8bee601",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "c723f5cd-dd47-4192-a14c-c528df7201e6",
      NodeId: "033fc6ab-c302-41db-96d5-baa0d5dfdcec",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "033fc6ab-c302-41db-96d5-baa0d5dfdcec",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-136",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-136",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "0093cec5-4864-4402-9062-b4fde5378947",
          Ip: "192.168.1.1",
          L3InterfaceId: "26d2f663-e1f3-4684-a7fb-8cafc13d6e39"
        }
      ],
      Id: "26d2f663-e1f3-4684-a7fb-8cafc13d6e39",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "033fc6ab-c302-41db-96d5-baa0d5dfdcec"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "b00e9674-5656-43eb-b2fc-9d36fb92d21e",
            Ip: "192.168.1.1",
            L3InterfaceId: "0bdb2345-7bb0-4095-a2eb-dff0f48d063a"
          }
        ],
        Id: "0bdb2345-7bb0-4095-a2eb-dff0f48d063a",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "1959c262-c1bf-462d-aa8c-6be985624ed3"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "bca55d62-ae3f-43fe-bb56-98649eca31fa",
        name: "upgrade",
        value: true
      },
      {
        Id: "96204e7b-8725-4600-83f7-a2fdc4db78b1",
        name: "save-running",
        value: true
      },
      {
        Id: "848d6dbb-1b29-413f-9e92-d1b3de648e13",
        name: "reboot",
        value: true
      },
      {
        Id: "5191748c-97dd-4418-8906-fe32ad2fd797",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "65f4a75e-5c44-46b2-9dcc-dda546e68eca",
      NodeId: "1959c262-c1bf-462d-aa8c-6be985624ed3",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "1959c262-c1bf-462d-aa8c-6be985624ed3",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-137",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-137",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "b00e9674-5656-43eb-b2fc-9d36fb92d21e",
          Ip: "192.168.1.1",
          L3InterfaceId: "0bdb2345-7bb0-4095-a2eb-dff0f48d063a"
        }
      ],
      Id: "0bdb2345-7bb0-4095-a2eb-dff0f48d063a",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "1959c262-c1bf-462d-aa8c-6be985624ed3"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "c6a0db2a-f611-4461-a4a0-f4b2500ec1b3",
            Ip: "192.168.1.1",
            L3InterfaceId: "4c4aedf8-cfe6-4426-9bc8-0cd54f07060b"
          }
        ],
        Id: "4c4aedf8-cfe6-4426-9bc8-0cd54f07060b",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "832a7aa6-1950-405a-a4c8-59441268b5f1"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "ced061f1-b809-4535-8952-5b7bdc6097d1",
        name: "reboot",
        value: true
      },
      {
        Id: "7e9f92ce-e76a-46f7-9524-67c8006483f4",
        name: "save-running",
        value: true
      },
      {
        Id: "7266e33b-ab4c-465a-aa29-efb081fcebfa",
        name: "upgrade",
        value: true
      },
      {
        Id: "63011e3b-90c5-4645-99a9-f245cc7ddf86",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "8683613b-d2be-4f0d-9f69-343f09cadb93",
      NodeId: "832a7aa6-1950-405a-a4c8-59441268b5f1",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "832a7aa6-1950-405a-a4c8-59441268b5f1",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-138",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-138",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "c6a0db2a-f611-4461-a4a0-f4b2500ec1b3",
          Ip: "192.168.1.1",
          L3InterfaceId: "4c4aedf8-cfe6-4426-9bc8-0cd54f07060b"
        }
      ],
      Id: "4c4aedf8-cfe6-4426-9bc8-0cd54f07060b",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "832a7aa6-1950-405a-a4c8-59441268b5f1"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "878adaa2-2911-4a5f-8a7e-1d0ebf17ac3f",
            Ip: "192.168.1.1",
            L3InterfaceId: "fa31a7fe-59b5-48e9-9f50-8a3d2b39d178"
          }
        ],
        Id: "fa31a7fe-59b5-48e9-9f50-8a3d2b39d178",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "3cd4a9a7-1bb8-41f4-9ff2-9b56c9e218ed"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "8c0dcf32-3121-4dcc-adc1-01916b8092fa",
        name: "upgrade",
        value: true
      },
      {
        Id: "77be17bc-a10b-48e0-b8d5-1548f6312259",
        name: "save-running",
        value: true
      },
      {
        Id: "9ce1db0c-ce2a-4552-9f33-3b9da464ea54",
        name: "reboot",
        value: true
      },
      {
        Id: "a8770844-281d-4b14-8b8f-d348caca293d",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "e499d274-a420-48eb-a58e-f6a9b3305f09",
      NodeId: "3cd4a9a7-1bb8-41f4-9ff2-9b56c9e218ed",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "3cd4a9a7-1bb8-41f4-9ff2-9b56c9e218ed",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-139",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-139",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "878adaa2-2911-4a5f-8a7e-1d0ebf17ac3f",
          Ip: "192.168.1.1",
          L3InterfaceId: "fa31a7fe-59b5-48e9-9f50-8a3d2b39d178"
        }
      ],
      Id: "fa31a7fe-59b5-48e9-9f50-8a3d2b39d178",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "3cd4a9a7-1bb8-41f4-9ff2-9b56c9e218ed"
    }
  },
  {
    alertConfigurations: [],
    eox: {
      Id: "e8bcf486-5460-4995-a0cd-344a3976928b",
      currentState: "3304",
      dateOfAnnouncement: 1331164800000,
      lastDateOfSale: 1362700800000,
      lastDateOfRelease: 0,
      lastDateOfContract: 1394236800000,
      lastDateOfRenew: 1496707200000,
      lastDateOfSupport: 1522454400000,
      recommendedReplacementId: "GLC-SX-MMD=",
      recommendedReplacementUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/ps6577/product_data_sheet0900aecd8033f885.html",
      bulletinId: "EOL7727",
      bulletinUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/eol_c51-698060.html"
    },
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "2e737c3c-59dc-4d0d-89d4-d25835d351f2",
            Ip: "192.168.1.1",
            L3InterfaceId: "449f81c5-f10e-4ac1-b871-8dd48d294058"
          }
        ],
        Id: "449f81c5-f10e-4ac1-b871-8dd48d294058",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "952af8cf-562d-4591-b213-bbfd41e86b06"
      }
    ],
    maintenance: {
      Id: "b13c4103-3386-421a-9a9c-0318236a2840",
      NodeId: "952af8cf-562d-4591-b213-bbfd41e86b06",
      status: "3504",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "7275e96b-b726-4811-a6d5-212b77ad3812",
        name: "save-running",
        value: true
      },
      {
        Id: "c8b87090-05e6-4000-ac1f-5f2c10800d1d",
        name: "upgrade",
        value: true
      },
      {
        Id: "fb9db59f-7227-4b31-a93c-7a1e86244586",
        name: "reboot",
        value: true
      },
      {
        Id: "4d41b9d8-6ce7-491e-9ab2-a2a7710dd3cc",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "b6f577a2-ba4c-4300-93a2-9bdfab5f77fb",
      NodeId: "952af8cf-562d-4591-b213-bbfd41e86b06",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "952af8cf-562d-4591-b213-bbfd41e86b06",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-140",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-140",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "1.0.01.1702",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "2e737c3c-59dc-4d0d-89d4-d25835d351f2",
          Ip: "192.168.1.1",
          L3InterfaceId: "449f81c5-f10e-4ac1-b871-8dd48d294058"
        }
      ],
      Id: "449f81c5-f10e-4ac1-b871-8dd48d294058",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "952af8cf-562d-4591-b213-bbfd41e86b06"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "254b4da9-19b5-4e1a-af16-ff78d2b3fb7a",
            Ip: "192.168.1.1",
            L3InterfaceId: "869f7a10-052e-4232-b79f-5b05dc50d9dd"
          }
        ],
        Id: "869f7a10-052e-4232-b79f-5b05dc50d9dd",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "507022af-37c5-4b0f-a636-2f98396eb526"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "43b4d6a6-cdc6-4cb5-a891-45f478c88bcc",
        name: "reboot",
        value: true
      },
      {
        Id: "8f48c57e-3a7f-482d-89e3-534d3d643982",
        name: "save-running",
        value: true
      },
      {
        Id: "7596244a-04f5-4388-8553-f0c3f585c0cd",
        name: "upgrade",
        value: true
      },
      {
        Id: "79d0b972-ffe6-465f-9575-fe546af7bb2d",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "d2bf8918-c34d-4cb2-9ce9-74b0c190554b",
      NodeId: "507022af-37c5-4b0f-a636-2f98396eb526",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "507022af-37c5-4b0f-a636-2f98396eb526",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-141",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-141",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "254b4da9-19b5-4e1a-af16-ff78d2b3fb7a",
          Ip: "192.168.1.1",
          L3InterfaceId: "869f7a10-052e-4232-b79f-5b05dc50d9dd"
        }
      ],
      Id: "869f7a10-052e-4232-b79f-5b05dc50d9dd",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "507022af-37c5-4b0f-a636-2f98396eb526"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "1c575f5f-b70f-40a6-9a69-e8d4ab3fff0b",
            Ip: "192.168.1.1",
            L3InterfaceId: "50d40dab-9c3e-4f0d-8200-fd7fd5c8032c"
          }
        ],
        Id: "50d40dab-9c3e-4f0d-8200-fd7fd5c8032c",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "61c23032-216f-412a-a0c0-231894a44de7"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "845f148b-0c69-4e54-ad02-502e48e3b30c",
        name: "upgrade",
        value: true
      },
      {
        Id: "3710c21b-d3cb-44d8-b392-835cd8ba508d",
        name: "reboot",
        value: true
      },
      {
        Id: "03c43478-d5b2-4a38-b41e-88b27966cdad",
        name: "backup",
        value: true
      },
      {
        Id: "b8392785-15cb-4449-acc1-ca106856b41e",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "cc1724e2-0543-4dc8-87d0-d045ba6e3410",
      NodeId: "61c23032-216f-412a-a0c0-231894a44de7",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "61c23032-216f-412a-a0c0-231894a44de7",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-142",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-142",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "1c575f5f-b70f-40a6-9a69-e8d4ab3fff0b",
          Ip: "192.168.1.1",
          L3InterfaceId: "50d40dab-9c3e-4f0d-8200-fd7fd5c8032c"
        }
      ],
      Id: "50d40dab-9c3e-4f0d-8200-fd7fd5c8032c",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "61c23032-216f-412a-a0c0-231894a44de7"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "4d5975a3-89ae-447f-ad0f-0f5f8fff5610",
            Ip: "192.168.1.1",
            L3InterfaceId: "7365f311-cdeb-4f9e-8c69-642f898b9529"
          }
        ],
        Id: "7365f311-cdeb-4f9e-8c69-642f898b9529",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "68c9c575-d302-4b0d-9c47-9e4e9862f980"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "64f5b2e5-1081-4832-b4cb-03a5a31b48f9",
        name: "upgrade",
        value: true
      },
      {
        Id: "80ad0b17-9c9b-4191-a637-4334d9cfba73",
        name: "reboot",
        value: true
      },
      {
        Id: "3405b603-23a4-4e32-8efb-95b54e883e59",
        name: "backup",
        value: true
      },
      {
        Id: "04b1ccaa-36b6-499f-b1d2-ef1b085416bd",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "6da88425-9339-4f64-8911-11cd2ef181be",
      NodeId: "68c9c575-d302-4b0d-9c47-9e4e9862f980",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "68c9c575-d302-4b0d-9c47-9e4e9862f980",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-143",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-143",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "4d5975a3-89ae-447f-ad0f-0f5f8fff5610",
          Ip: "192.168.1.1",
          L3InterfaceId: "7365f311-cdeb-4f9e-8c69-642f898b9529"
        }
      ],
      Id: "7365f311-cdeb-4f9e-8c69-642f898b9529",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "68c9c575-d302-4b0d-9c47-9e4e9862f980"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "2db61f4e-ad40-4301-adc1-b26f2f03af69",
            Ip: "192.168.1.1",
            L3InterfaceId: "69084f3f-e7a2-49eb-9ebf-90268d3dba71"
          }
        ],
        Id: "69084f3f-e7a2-49eb-9ebf-90268d3dba71",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "e306ad32-4142-465a-8d77-d37bb861ba0c"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "ff1bbd10-a7df-4754-9d41-5aadaf65f8cc",
        name: "backup",
        value: true
      },
      {
        Id: "a239aea0-d812-41bc-8271-82f8173846bf",
        name: "upgrade",
        value: true
      },
      {
        Id: "73e89146-b8ed-49df-924c-d8b80be1fa74",
        name: "reboot",
        value: true
      },
      {
        Id: "b0c03edc-f128-4abb-af42-f4b47b56db4f",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "89d72f69-21f0-48e2-9584-a3c6f76b6430",
      NodeId: "e306ad32-4142-465a-8d77-d37bb861ba0c",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "e306ad32-4142-465a-8d77-d37bb861ba0c",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-144",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-144",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "2db61f4e-ad40-4301-adc1-b26f2f03af69",
          Ip: "192.168.1.1",
          L3InterfaceId: "69084f3f-e7a2-49eb-9ebf-90268d3dba71"
        }
      ],
      Id: "69084f3f-e7a2-49eb-9ebf-90268d3dba71",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "e306ad32-4142-465a-8d77-d37bb861ba0c"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "dcbfed1c-55de-4a85-b22b-13b74a00daeb",
            Ip: "192.168.1.1",
            L3InterfaceId: "64eaf2c1-ff83-4fd6-b486-e3c01cfe54bc"
          }
        ],
        Id: "64eaf2c1-ff83-4fd6-b486-e3c01cfe54bc",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "6894df1c-41bf-4916-bc3f-43bdfcfaf6bf"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "5aea3ca7-76d6-430e-91c7-00fa8470663a",
        name: "backup",
        value: true
      },
      {
        Id: "4a2f8caf-b338-4847-beb4-1f17d6848fe2",
        name: "upgrade",
        value: true
      },
      {
        Id: "e585cfb8-e733-46e9-8a45-862567d8b0dc",
        name: "save-running",
        value: true
      },
      {
        Id: "475192c7-8f81-47e6-a8b4-9b50396074a8",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "a6643e53-73b0-4ca7-9a03-f378cd144acc",
      NodeId: "6894df1c-41bf-4916-bc3f-43bdfcfaf6bf",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "6894df1c-41bf-4916-bc3f-43bdfcfaf6bf",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-145",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-145",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "dcbfed1c-55de-4a85-b22b-13b74a00daeb",
          Ip: "192.168.1.1",
          L3InterfaceId: "64eaf2c1-ff83-4fd6-b486-e3c01cfe54bc"
        }
      ],
      Id: "64eaf2c1-ff83-4fd6-b486-e3c01cfe54bc",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "6894df1c-41bf-4916-bc3f-43bdfcfaf6bf"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "aa85613f-43d4-4588-85bd-ecea1f01b118",
            Ip: "192.168.1.1",
            L3InterfaceId: "d6469e57-c492-4057-a2ec-5c7471c2663d"
          }
        ],
        Id: "d6469e57-c492-4057-a2ec-5c7471c2663d",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "2af3798c-0a98-4bf5-a276-31def3582b63"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "208e72e9-3299-4cab-9b96-3b8abfe4f052",
        name: "backup",
        value: true
      },
      {
        Id: "bbcb1571-bb2a-4cba-9e1e-97772f08eee4",
        name: "reboot",
        value: true
      },
      {
        Id: "3a55ccad-a550-4207-84f6-b9305ece1389",
        name: "upgrade",
        value: true
      },
      {
        Id: "34a74fb3-2c36-4a70-b095-d600b82a00aa",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "086b7acd-e4c9-4c5c-90f9-5c7dbde27f49",
      NodeId: "2af3798c-0a98-4bf5-a276-31def3582b63",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "2af3798c-0a98-4bf5-a276-31def3582b63",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-146",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-146",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "aa85613f-43d4-4588-85bd-ecea1f01b118",
          Ip: "192.168.1.1",
          L3InterfaceId: "d6469e57-c492-4057-a2ec-5c7471c2663d"
        }
      ],
      Id: "d6469e57-c492-4057-a2ec-5c7471c2663d",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "2af3798c-0a98-4bf5-a276-31def3582b63"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "352d1ca0-1f5a-4448-ac39-85b38337eee4",
            Ip: "192.168.1.1",
            L3InterfaceId: "614e0394-c411-4494-b4aa-b7a285119a64"
          }
        ],
        Id: "614e0394-c411-4494-b4aa-b7a285119a64",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "76c53545-ab2f-452c-aa26-378e9eacb4df"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "ef928d61-0387-46e1-bcf4-14acba38216b",
        name: "reboot",
        value: true
      },
      {
        Id: "d884d7a0-e4ef-45f2-a00d-852368080d86",
        name: "upgrade",
        value: true
      },
      {
        Id: "f1850099-cca3-4946-a4fd-93f46b7af46c",
        name: "backup",
        value: true
      },
      {
        Id: "30339cee-7a69-457e-a652-c5255f1f067d",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "ac8cd6aa-e21d-46a2-96ce-a4853f561f8f",
      NodeId: "76c53545-ab2f-452c-aa26-378e9eacb4df",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "76c53545-ab2f-452c-aa26-378e9eacb4df",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-147",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-147",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "352d1ca0-1f5a-4448-ac39-85b38337eee4",
          Ip: "192.168.1.1",
          L3InterfaceId: "614e0394-c411-4494-b4aa-b7a285119a64"
        }
      ],
      Id: "614e0394-c411-4494-b4aa-b7a285119a64",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "76c53545-ab2f-452c-aa26-378e9eacb4df"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "94bb8b9f-4979-4a95-b789-84d6dcbf6821",
            Ip: "192.168.1.1",
            L3InterfaceId: "d6292dcd-92ae-47cf-b4cf-0337c9378af3"
          }
        ],
        Id: "d6292dcd-92ae-47cf-b4cf-0337c9378af3",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "8a359abf-3ce6-4157-8b60-7244e2368352"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "b340c073-dafb-4710-8bcb-33dead1fa463",
        name: "upgrade",
        value: true
      },
      {
        Id: "dabdbe60-3471-4de1-ac67-4d8cc9a68b59",
        name: "save-running",
        value: true
      },
      {
        Id: "c95b5c19-fad6-40d0-b044-5a028eea1ba6",
        name: "backup",
        value: true
      },
      {
        Id: "b2e67a3c-5fc9-475f-b567-c11ddeef4f61",
        name: "reboot",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "870485ec-8ac3-4451-a466-0db6d50b6d6e",
      NodeId: "8a359abf-3ce6-4157-8b60-7244e2368352",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "8a359abf-3ce6-4157-8b60-7244e2368352",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-148",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-148",
    modelId: "RV340W",
    nodeType: "Router",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "94bb8b9f-4979-4a95-b789-84d6dcbf6821",
          Ip: "192.168.1.1",
          L3InterfaceId: "d6292dcd-92ae-47cf-b4cf-0337c9378af3"
        }
      ],
      Id: "d6292dcd-92ae-47cf-b4cf-0337c9378af3",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "8a359abf-3ce6-4157-8b60-7244e2368352"
    }
  },
  {
    alertConfigurations: [],
    eox: null,
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "d7ed3f35-7ec9-4571-8513-dbb450a1920e",
            Ip: "192.168.1.1",
            L3InterfaceId: "b35eae63-df53-4ab7-a0f3-512ce808d579"
          }
        ],
        Id: "b35eae63-df53-4ab7-a0f3-512ce808d579",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "8a61a02c-778d-4eed-b63f-52e43f824b25"
      }
    ],
    maintenance: null,
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "8ec2c1bf-a254-489a-b620-b7b4c6a5d760",
        name: "upgrade",
        value: true
      },
      {
        Id: "5ffc4569-71ca-4a77-b38c-bcf6d2b8b76b",
        name: "reboot",
        value: true
      },
      {
        Id: "c1a087a2-13d7-48ce-b671-c47bde06fa9b",
        name: "backup",
        value: true
      },
      {
        Id: "242c373a-37c5-400e-93b4-f4d11858028b",
        name: "save-running",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "4ee706f0-4ccb-422f-a506-e2c9b3b16820",
      NodeId: "8a61a02c-778d-4eed-b63f-52e43f824b25",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "8a61a02c-778d-4eed-b63f-52e43f824b25",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-149",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-149",
    modelId: "RV340W",
    nodeType: "WAP",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "d7ed3f35-7ec9-4571-8513-dbb450a1920e",
          Ip: "192.168.1.1",
          L3InterfaceId: "b35eae63-df53-4ab7-a0f3-512ce808d579"
        }
      ],
      Id: "b35eae63-df53-4ab7-a0f3-512ce808d579",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "8a61a02c-778d-4eed-b63f-52e43f824b25"
    }
  },
  {
    alertConfigurations: [],
    eox: {
      Id: "ace939fa-2288-4db6-aab0-46b1590308fa",
      currentState: "3304",
      dateOfAnnouncement: 1331164800000,
      lastDateOfSale: 1362700800000,
      lastDateOfRelease: 0,
      lastDateOfContract: 1394236800000,
      lastDateOfRenew: 1496707200000,
      lastDateOfSupport: 1522454400000,
      recommendedReplacementId: "GLC-SX-MMD=",
      recommendedReplacementUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/ps6577/product_data_sheet0900aecd8033f885.html",
      bulletinId: "EOL7727",
      bulletinUrl:
        "http://www.cisco.com/en/US/prod/collateral/modules/ps5455/eol_c51-698060.html"
    },
    l3Interfaces: [
      {
        IpAddresses: [
          {
            Id: "28c44c1f-4fc4-4de7-a8bc-3cbddd8d8211",
            Ip: "192.168.1.1",
            L3InterfaceId: "dda176cc-9212-4313-af4b-cb46ba61d477"
          }
        ],
        Id: "dda176cc-9212-4313-af4b-cb46ba61d477",
        name: null,
        mac: "EC:BD:1D:44:59:BD",
        ip: null,
        management: true,
        NodeId: "6fe90fe9-e600-49ee-a7f2-2dd3c5ece369"
      }
    ],
    maintenance: {
      Id: "7ae5cc1a-79cd-46fa-8965-895ec2e08941",
      NodeId: "6fe90fe9-e600-49ee-a7f2-2dd3c5ece369",
      status: "3504",
      coverageEndDate: 0,
      CoverageEndDateStr: "0",
      WarrantyEndDateStr: "0",
      warrantyEndDate: 0
    },
    NodeActionLogs: [],
    NodeActions: [],
    capabilities: [
      {
        Id: "e5b8f1fe-c92c-44d9-bfed-0288256e772d",
        name: "save-running",
        value: true
      },
      {
        Id: "2a35c7df-0b7c-4e0f-bda8-4241e3ddff85",
        name: "reboot",
        value: true
      },
      {
        Id: "ff2b7a5f-6d51-4305-82bc-8a20c110b663",
        name: "upgrade",
        value: true
      },
      {
        Id: "91412463-fd87-4211-aaca-ca7cde2c82ac",
        name: "backup",
        value: true
      }
    ],
    NodeEvents: [],
    states: {
      Id: "b60aa7f8-165d-4276-911d-19487f73c159",
      NodeId: "6fe90fe9-e600-49ee-a7f2-2dd3c5ece369",
      Overall: "warning"
    },
    tagObjects: [],
    Id: "6fe90fe9-e600-49ee-a7f2-2dd3c5ece369",
    nodeId: "2109b242-5cb3-4965-95f1-5eac64f3094f-inv-150",
    serialNumber: "PSZ20301DQC",
    hostname: "router4459BD-2109b242-5cb3-4965-95f1-5eac64f3094f-inv-150",
    modelId: "RV340W",
    nodeType: "Switch",
    productId: "RV340W-A-K9",
    version: "1.0.01.1701",
    updateVersion: "1.0.01.1702",
    vid: "02",
    description: null,
    NetworkId: "821969ce-c9ca-46b7-8a48-c9258743c04d",
    tags: [],
    totalEvents: 0,
    Eox: {},
    Interfaces: {
      IpAddresses: [
        {
          Id: "28c44c1f-4fc4-4de7-a8bc-3cbddd8d8211",
          Ip: "192.168.1.1",
          L3InterfaceId: "dda176cc-9212-4313-af4b-cb46ba61d477"
        }
      ],
      Id: "dda176cc-9212-4313-af4b-cb46ba61d477",
      name: null,
      mac: "EC:BD:1D:44:59:BD",
      ip: null,
      management: true,
      NodeId: "6fe90fe9-e600-49ee-a7f2-2dd3c5ece369"
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
          style={{ whiteSpace: "normal" }}
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

    this.pageSize = 50;
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
