const renewablesData = [
    {
      "project_name": "A1",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-Development",
      "location": "Mount Pleasant, Westchester County",
      "load_zone": "H - MILLWD, I - DUNWOD",
      "status": "Under Review",
      "capacity": 130,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "Acquest Development",
      "longitude": -73.798709,
      "latitude": 41.115641
    },
    {
      "project_name": "B1",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Watertown & Hounsfield, Jefferson County",
      "load_zone": "E - MHK VL",
      "status": "Ready to Build",
      "capacity": 140,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "Boralex",
      "longitude": -75.977027,
      "latitude": 43.970096
    },
    {
      "project_name": "B2",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Tully, Onondaga County",
      "load_zone": "C - CENTRL",
      "status": "Ready to Build",
      "capacity": 20,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q1 2027",
      "completion_date": "2027-01-01",
      "partnership": "Boralex",
      "longitude": -76.106728,
      "latitude": 42.801361
    },
    {
      "project_name": "B3",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Greenwich, Washington County",
      "load_zone": "F - CAPITL",
      "status": "Ready to Build",
      "capacity": 20,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q1 2027",
      "completion_date": "2027-01-01",
      "partnership": "Boralex",
      "longitude": -73.497168,
      "latitude": 43.083829
    },
    {
      "project_name": "B4",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Fort Covington, Franklin County",
      "load_zone": "D - NORTH",
      "status": "Under Review",
      "capacity": 250,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "Boralex",
      "longitude": -74.500512,
      "latitude": 44.97896
    },
    {
      "project_name": "B5",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Massena & Brasher, Saint Lawrence County",
      "load_zone": "D - NORTH",
      "status": "Under Review",
      "capacity": 200,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "Boralex",
      "longitude": -74.829243,
      "latitude": 44.914466
    },
    {
      "project_name": "C1",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Glen, Montgomery County",
      "load_zone": "E - MHK VL",
      "status": "Under Review",
      "capacity": 250,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "ConnectGen/Repsol",
      "longitude": -74.344364,
      "latitude": 42.893711
    },
    {
      "project_name": "C2",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "South Ripley, Chautauqua County",
      "load_zone": "A - WEST",
      "status": "Under Review",
      "capacity": 270,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "ConnectGen/Repsol",
      "longitude": -79.721203,
      "latitude": 42.194516
    },
    {
      "project_name": "D3",
      "project_type": "Solar",
      "ownership": "Build Transfer Agreement",
      "location": "Fort Edward, Washington County",
      "load_zone": "F - CAPITL",
      "status": "Ready to Build",
      "capacity": 20,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2026",
      "completion_date": "2026-10-01",
      "partnership": "CS Energy",
      "longitude": -73.584496,
      "latitude": 43.268262
    },
    {
      "project_name": "E2",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Ellenburg Depot, Clinton County",
      "load_zone": "D - NORTH",
      "status": "Under Review",
      "capacity": 100,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q2 2030",
      "completion_date": "2030-04-01",
      "partnership": "Forward Power",
      "longitude": -73.800284,
      "latitude": 44.905449
    },
    {
      "project_name": "E3",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Caledonia, Livingston County",
      "load_zone": "B - GENESE",
      "status": "Under Review",
      "capacity": 184,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "Forward Power",
      "longitude": -77.854874,
      "latitude": 42.974055
    },
    {
      "project_name": "E4",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Charleston, Montgomery County",
      "load_zone": "F - CAPITL",
      "status": "Under Review",
      "capacity": 185,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2030",
      "completion_date": "2030-10-01",
      "partnership": "Forward Power",
      "longitude": -74.34038393,
      "latitude": 42.83816504
    },
    {
      "project_name": "E5",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Croghan, Lewis County",
      "load_zone": "E - MHK VL",
      "status": "Under Review",
      "capacity": 75,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q3 2029",
      "completion_date": "2029-07-01",
      "partnership": "Forward Power",
      "longitude": -75.38958947,
      "latitude": 43.89581894
    },
    {
      "project_name": "E6",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Verona, Oneida County",
      "load_zone": "C - CENTRL",
      "status": "Under Review",
      "capacity": 199,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2030",
      "completion_date": "2030-10-01",
      "partnership": "Forward Power",
      "longitude": -75.5695432,
      "latitude": 43.13635016
    },
    {
      "project_name": "E7",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Verona, Oneida County",
      "load_zone": "C - CENTRL",
      "status": "Under Review",
      "capacity": 199,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q4 2030",
      "completion_date": "2030-10-01",
      "partnership": "Forward Power",
      "longitude": -75.5695432,
      "latitude": 43.13635016
    },
    {
      "project_name": "F1",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Watkins Glen, Schuyler County",
      "load_zone": "C - CENTRL",
      "status": "Ready to Build",
      "capacity": 50,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "NextEra Energy Resources",
      "longitude": -76.8727496,
      "latitude": 42.37631232
    },
    {
      "project_name": "F2",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Massena, Saint Lawrence County",
      "load_zone": "D - NORTH",
      "status": "Ready to Build",
      "capacity": 180,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2029",
      "completion_date": "2029-10-01",
      "partnership": "NextEra Energy Resources",
      "longitude": -74.89246473,
      "latitude": 44.92533887
    },
    {
      "project_name": "F3",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Conquest, Cayuga County",
      "load_zone": "B - GENESE",
      "status": "Under Review",
      "capacity": 200,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "NextEra Energy Resources",
      "longitude": -76.64817451,
      "latitude": 43.12089437
    },
    {
      "project_name": "F4",
      "project_type": "Solar",
      "ownership": "Co-Development",
      "location": "Waterloo, Seneca County",
      "load_zone": "C - CENTRL",
      "status": "Ready to Build",
      "capacity": 79.8,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "NextEra Energy Resources",
      "longitude": -76.85823816,
      "latitude": 42.90348438
    },
    {
      "project_name": "G1",
      "project_type": "Solar",
      "ownership": "Self-developed",
      "location": "Napanoch, Ulster County",
      "load_zone": "G - HUD VL",
      "status": "Under Review",
      "capacity": 30,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities, Actively benefits DACs",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "New York Power Authority",
      "longitude": -74.37045125,
      "latitude": 41.75093524
    },
    {
      "project_name": "G2",
      "project_type": "Solar",
      "ownership": "Self-developed",
      "location": "Pine City, Chemung County",
      "load_zone": "C - CENTRL",
      "status": "Under Review",
      "capacity": 42,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "New York Power Authority",
      "longitude": -76.8695324,
      "latitude": 42.03610241
    },
    {
      "project_name": "G3",
      "project_type": "Solar",
      "ownership": "Self-developed",
      "location": "Fallsburg, Sullivan County",
      "load_zone": "E - MHK VL",
      "status": "Under Review",
      "capacity": 100,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities, Actively benefits DACs",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "New York Power Authority",
      "longitude": -74.61615541,
      "latitude": 41.73134959
    },
    {
      "project_name": "G4",
      "project_type": "Solar",
      "ownership": "Self-developed",
      "location": "Utica, Oneida County",
      "load_zone": "E - MHK VL",
      "status": "Under Review",
      "capacity": 20,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities",
      "completion_quarter": "Q4 2028",
      "completion_date": "2028-10-01",
      "partnership": "New York Power Authority",
      "longitude": -75.23428155,
      "latitude": 43.09832182
    },
    {
      "project_name": "G5",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "Menands, Albany County",
      "load_zone": "F - CAPITL",
      "status": "Planned",
      "capacity": 1.52,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -73.72671777,
      "latitude": 42.68983605
    },
    {
      "project_name": "G6",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "Buffalo, Erie County",
      "load_zone": "A - WEST",
      "status": "Planned",
      "capacity": 1,
      "purpose": "Support CLCPA, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -78.85826529,
      "latitude": 42.89117902
    },
    {
      "project_name": "G11",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "Cobleskill, Schoharie County",
      "load_zone": "F - CAPITL",
      "status": "Planned",
      "capacity": 1.38,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -74.48729968,
      "latitude": 42.68065148
    },
    {
      "project_name": "G14",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "New York City, Richmond County (Staten Island)",
      "load_zone": "J - N.Y.C.",
      "status": "Planned",
      "capacity": 1.5,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -74.15215533,
      "latitude": 40.57431742
    },
    {
      "project_name": "G15",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "Lewiston, Niagara County",
      "load_zone": "A - WEST",
      "status": "Planned",
      "capacity": 4.96,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -79.03924865,
      "latitude": 43.17216719
    },
    {
      "project_name": "G16",
      "project_type": "Solar (DER)",
      "ownership": "Self-developed",
      "location": "Marcy, Oneida County",
      "load_zone": "E - MHK VL",
      "status": "Planned",
      "capacity": 1.54,
      "purpose": "Support CLCPA, Support renewables development on public-owned facilities",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "New York Power Authority",
      "longitude": -75.29117021,
      "latitude": 43.1700609
    },
    {
      "project_name": "H1",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Deerpark, Orange County",
      "load_zone": "G - HUD VL",
      "status": "Ready to Build",
      "capacity": 10,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability, Actively benefits DACs",
      "completion_quarter": "Q4 2027",
      "completion_date": "2027-10-01",
      "partnership": "Oriden",
      "longitude": -74.66610295,
      "latitude": 41.4268556
    },
    {
      "project_name": "H2",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Galen, Wayne County",
      "load_zone": "C - CENTRL",
      "status": "Under Review",
      "capacity": 50,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability, Actively benefits DACs",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "Oriden",
      "longitude": -76.88275745,
      "latitude": 43.06645387
    },
    {
      "project_name": "H3",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Canajoharie, Montgomery County",
      "load_zone": "F - CAPITL",
      "status": "Under Review",
      "capacity": 50,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "Oriden",
      "longitude": -74.57114104,
      "latitude": 42.89643112
    },
    {
      "project_name": "H4",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Clinton, Clinton County",
      "load_zone": "D - NORTH",
      "status": "Under Review",
      "capacity": 50,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability",
      "completion_quarter": "Q2 2028",
      "completion_date": "2028-04-01",
      "partnership": "Oriden",
      "longitude": -73.93251871,
      "latitude": 44.95056263
    },
    {
      "project_name": "J1",
      "project_type": "Solar (DER)",
      "ownership": "Co-development",
      "location": "New Baltimore, Greene County",
      "load_zone": "G - HUD VL",
      "status": "Ready to Build",
      "capacity": 5,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q2 2025",
      "completion_date": "2025-04-01",
      "partnership": "Teichos Energy",
      "longitude": -73.7948015,
      "latitude": 42.44731011
    },
    {
      "project_name": "K1",
      "project_type": "Solar (DER)",
      "ownership": "Co-development",
      "location": "Briarcliff Manor, Westchester County",
      "load_zone": "G - HUD VL",
      "status": "Ready to Build",
      "capacity": 10,
      "purpose": "Support CLCPA",
      "completion_quarter": "Q3 2026",
      "completion_date": "2026-07-01",
      "partnership": "YSG Solar",
      "longitude": -73.84102866,
      "latitude": 41.136038
    },
    {
      "project_name": "K3",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Brookhaven, Suffolk County",
      "load_zone": "K - LONGIL",
      "status": "Under Review",
      "capacity": 140,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability",
      "completion_quarter": "Q1 2027",
      "completion_date": "2027-01-01",
      "partnership": "YSG Solar",
      "longitude": -72.94212669,
      "latitude": 40.85696255
    },
    {
      "project_name": "K4",
      "project_type": "Battery Energy Storage System",
      "ownership": "Co-development",
      "location": "Brookhaven, Suffolk County",
      "load_zone": "K - LONGIL",
      "status": "Under Review",
      "capacity": 4,
      "purpose": "Support CLCPA, Resource Adequacy/Reliability",
      "completion_quarter": "Q3 2026",
      "completion_date": "2026-07-01",
      "partnership": "YSG Solar",
      "longitude": -72.94212669,
      "latitude": 40.85696255
    }
  ]