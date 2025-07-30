window.raciGlobals = {

  // Code 1
  stockingTypeDefinitions: {
    meta: {
      label: "STOCKING TYPE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "supplyChain",
      governance: "GLOBAL",
      function: "The stocking type defines whether an item is held in inventory and how it is managed within the supply chain", 
      dataType:  "udc",  
      changeRequest: "YES",
      alias: "STKT"
    },
    values: { 
        DEFAULT: "",
        M: "The M stocking type is used for manufactured items that are not sold directly, such as production phases, bulk adhesives, bulk oligomers, and some equipment sub-assemblies.",
        P: "The P stocking type is used for any purchased raw material or any item acquired via an intercompany transfer",
        S: "The S stocking type is used for manufactured and packaged items that are sold directly, including finished goods and saleable intermediates",
        O: "Obsolete"

    }
  },


  // Code 2
  gLClassDefinitions: {
    meta: {
      label: "G/L CLASS",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "finance",
      governance: "GLOBAL",
      function: "Defines the accounting treatment for items by linking them to Automatic Accounting Instructions (AAIs), grouping similar items into general ledger buckets for financial tracking and reporting. Groups items by financial behavior to control how transactions are posted to the general ledger through predefined accounting rules.", 
      dataType:  "udc",  
      changeRequest: "YES",
      alias: "GLPT"
    },
values: { 
    DEFAULT: "",
    IN10: "Purchased Raw Materials: Adhesive and Oligomer raw materials purchased directly from vendor",
    IN11: "Purchased Raw Materials: Equipment raw materials purchased directly from vendor",
    IN20: "Phase: Adhesive or Oligomer subassembly",
    IN25: "Intermediates: Used for M stocking type non-sellable items such as bulk adhesives and bulk oligomers",
    IN26: "Intermediates: Used for M stocking type non-sellable equipment subassemblies",
    IN30: "Finished Goods: Used for S stocking type sellable packaged Adhesives and oligomers",
    IN31: "Finished Goods: Used for S stocking type sellable equipment items",
    IN35: "Service / Expedite Fee: Primarily used for ECT customer-owned parts",
    IN50: "Intercompany Transfers: P stocking type internal equipment purchases",
    IN51: "Intercompany Transfers: P stocking type internal adhesive purchases",
    IN52: "Intercompany Transfers: P stocking type internal oligomer purchases",
    IN53: "External Supplies: Used exclusively with ECT external purchases",
    IN57: "Restocking Fees",
    IN63: "Rental Fees",
    IN64: "Rental Sales",
    NS20: "ADH Processing Fees",
    NS36: "Non-Recurring Engineering Fee",
    NS37: "Repair and Labor Fees",
    NS39: "Lab Service Fees",
    NS40: "Non-Inventory R&D Parts",
    NS41: "Equipment Calibration Fees",
    TXCA: "California Taxes",
    TXCT: "Connecticut Taxes",
    TXFL: "Florida Taxes",
    TXTX: "General Taxes",
    TXWA: "Washington Taxes"
}

  },

  // Code 3
  lineTypeDefinitions: {
    meta: {
      label: "LINE TYPE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "supplyChain",
      governance: "GLOBAL",
      function: "How JDE processes, transacts, and generates planned orders for an item", 
      dataType:  "udc",  
      changeRequest: "YES",
      alias: "LNTY"
    },
   values: { 
    DEFAULT: "",
    S: "Stocked inventory: Not triggered by a sales order",
    W: "Make-to-order inventory: Sales order will trigger a linked work order",
    N: "Non-stock items",
    RD: "R&D sample that does not have inventory in the system",
    CA: "Credit order - Inventory (set up so we can refund a customer if we accidentally charge them sales tax)",
    Z: "Rental billing for rental fees",
    SV: "Service labor to bill for our training services for equipment",
    CB: "Credit & rebill for fees with no actual items"
}
  },



 // Code 4
  plannerNumberDefinitions: {
    meta: {
      label: "PLANNER NUMBER",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: ['sop','supplyChain'],
      governance: "LOCAL",
      function: "Routes production MRP messages to appropriate planner",
      dataType:  "udc",  
      changeRequest: "NO",
      alias: "ANPL"
    },
    values: { 
        DEFAULT: "",
        "81048": "BP20 Bomar Planner",
        "81049": "BP10 DNA Equipment Planner",
        "81050": "BP10 DNA Adhesive Planner",
        "81066": "BP32 DAP Planner",
        "81072": "BP34 Hong Kong Planner", 
        "81072": "BP36 Hanarey Planner", 
        "81053": "BP40 DEU Planner",
        "81084": "BP45 DEI Planner"
    }
  },




// Code 5
  buyerNumberDefinitions: {
    meta: {
      label: "BUYER NUMBER",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "supplyChain",
      governance: "LOCAL",
      function: "Routes purchasing MRP messages to appropriate buyer", 
      dataType:  "udc",  
      changeRequest: "NO",
      alias: "BUYR"
    },
    values: { 
        DEFAULT: "",
        "81043":"BP10 DNA Chemical Buyer",
        "81044":"BP10 DNA Electronics Buyer",
        "81045":"BP10 DNA Mechanical Buyer",
        "81046":"BP20 BOM Buyer",
        "81063":"BP32 DAP Buyer",
        "81075":"BP33 SZ Buyer",
        "81082":"BP34 KR Buyer",
        "81069":"BP36 HAN Buyer",
        "81053":"BP40 DEU Buyer",
        "81084":"BP45 DEI Buyer",
        "81080":"BP50 HK Buyer"
    }
  },

// Code 6
 supplierNumberDefinitions: {
  meta: {
    label: "SUPPLIER NUMBER",
    category: "BRANCH INFO: BASIC BRANCH DATA",
    owner: "supplyChain",
    governance: "LOCAL",
    function: "Links item to a primary supplier listed in the address book. Must be a valid supplier for the current branch. For internal transfer purchases, use the supply branch number as the supplier number. Supply Chain provides the supplier number For external vendors", 
    dataType:  "udc",  
    changeRequest: "NO",
    alias: "VEND"
  },
  values: { 
    DEFAULT: "",
    DEPENDENT: "Provided by supply chain"
  }
},

// Code 7
  printMessageDefinitions: {
    meta: {
      label: "PRINT MESSAGE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "quality",
      governance: "GLOBAL",
      function: "Communicates packaging & freight exceptions to the shipping department for each item by printing on warehouse pick slips. Also appears in the sales order detail and the purchase order detail. Quality owns the code, but it is communicated on initial commertialzation documentation such as DC046,DC468, DC802", 
      dataType:  "udc",  
      changeRequest: "YES", 
      alias: "INMG"
      
    },
    values: { 
      DEFAULT: "BLANK",
      "9671": "HEAT PACK DURING COLD WEATHER",
      MATERION: "COLD PACK REQUIREMENT",
      ROHS: 'ROHS CERT REQUIRED',
      XTREMECOLD: "EXTREME COLD PACK"
    }
  },


 // Code 8
  commitmentMethodDefinitions: {
    meta: {
      label: "COMMITMENT METHOD",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "supplyChain",
      governance: "LOCAL",
      function: "Inventory Shelf pulling strategy. The Method JDE uses to commit lot serialized items from inventory", 
      dataType:  "numeric",  
      changeRequest: "NO", 
      alias: "CMGL"
    },
    values: { 
      DEFAULT: {
        ADH: "3: lot expiration date",
        OLG: "3: lot expiration date",
        "Chemical Raws": "3: lot expiration date",
        EQU: "1 location with most quantity"
      },
      "3":"lot expiration date",
      "2":"lowest lot number",
      "1":"location with most quantity"
    }
  },



// Code 9
  countryOfOriginDefinitions: {
    meta: {
      label: "COUNTRY OF ORIGIN",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "supplyChain",
      governance: "GLOBAL/LOCAL",
      function: "defines the Country of manufacture", 
      dataType:  "udc",  
      changeRequest: "YES/NO",
      alias: "ORIG"
    },
    values: { 
      DEFAULT: "",
      DEPENDENT : {
        "Raw Materials" : "Provided by supply chain",
        Adhesives: "Country where bulk is produced",
        Oligomers: "US",
        Equipment: "Country where assembled/manufactured"
      }
    }
  },





  // Code 10
  salesTaxableDefinitions: {
    meta: {
      label: "SALES TAXABLE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: ['finance', 'supplyChain'],
      governance: "LOCAL",
      function: "A code that indicates whether the item is subject to sales tax when you sell it. The system calculates tax on the item only if the customer is also taxable.", 
      dataType:  "yesNo",  
      changeRequest: "NO", 
      alias: "TAX1"
    },
    values: { 
      DEFAULT: "",
      Y: "The system will apply & accrue the finance maintained tax rate",
      N: "The system WILL NOT apply & accrue the finance maintained tax rate"
    }
  },




   // Code 11
  purchasingTaxableDefinitions: {
    meta: {
      label: "PURCHASING TAXABLE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: ['finance', 'supplyChain'],
      governance: "LOCAL",
      function: "A code that indicates whether the item is subject to sales tax when you purchase it. The system calculates tax on the item only if the supplier is also taxable.", 
      dataType:  "yesNo",  
      changeRequest: "NO", 
      alias: "TX"
    },
     values: { 
      DEFAULT: "",
      Y: "The system will apply & accrue the finance maintained tax rate",
      N: "The system WILL NOT apply & accrue the finance maintained tax rate"
    }
  },



   // Code 12
  checkAvailabilityDefinitions: {
    meta: {
      label: "CHECK AVAILABILITY",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "customerService",
      governance: "LOCAL",
      function: "A code that specifies whether the system performs availability checking at the time sales orders are created", 
      dataType:  "checkbox",  
      changeRequest: "NO", 
      alias: "CKAV"
    },
    values: { 
      DEFAULT: "CHECKED: The system performs availability checking",
      CHECKED: "The system performs availability checking",
      UNCHECKED: "The system does not perform availability checking"
    }
  },




   // Code 13
  backordersAllowedDefinitions: {
    meta: {
      label: "BACKORDERS ALLOWED",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: ['sop', 'supplyChain'],
      governance: "LOCAL",
      function: "This option specifies whether to allow backorders for this item", 
      dataType:  "yesNo",  
      changeRequest: "NO", 
      alias: "BACK"
    },
    values: {
      DEFAULT: "CHECKED: Allow backorders for this item",
      CHECKED: "Allow backorders for this item",
      UNCHECKED: "Do not allow backorders for this item, regardless of the backorders code that is assigned to the customer"
    }
  },




   // Code 14
  europeHsCodeDefinitions: {
    meta: {
      label: "EUROPE HS CODE",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: ['regulatory','legal'],
      governance: "local",
      function: "Harmonized codes specific to Dymax Europe. DE adds the codes as needed", 
      dataType:  "char",  
      changeRequest: "NO", 
      alias: "URRF"
    },
    values: {
      DEFAULT: "Blank",
      DEPENDENT: "DE Managed"
    }
  },




   // Code 15
  tariffRequiredYNDefinitions: {
    meta: {
      label: "TARIFF REQUIRED (Y/N)",
      category: "BRANCH INFO: BASIC BRANCH DATA",
      owner: "legal",
      governance: "GLOBAL",
      function: "New Tariff Code, system automaticall defaults to Y. All items are to set to Y. Exeptions are items in Hanarey that are not imported or exported", 
      dataType:  "yesNo",  
      changeRequest: "YES", 
      alias: "URCD"
    },
    values: {
      DEFAULT: "Y: Tariff is required",
      Y: "Tariff is required",
      N: "Tariff is not required"
    }
  },


   // Code 16
  salesInventoryDefinitions: {
    meta: {
      label: "SALES - INVENTORY",
      category: "BRANCH INFO: ADDITIONAL INFORMATION",
      owner: "finance",
      governance: "LOCAL",
      function: "A code that specifies this item's ABC ranking by sales amount. Over time the ranking will recalculate automatically. New items are set to C.", 
      dataType:  "radio",  
      changeRequest: "NO", 
      alias: "ABCS"
    },
    values: {DEFAULT: "C: Default Starting point",
      A: ":If an item's value causes the accumulated total to exceed the A accumulated percentage, the system assigns the item to the B group",
      B: "When the accumulated total reaches the percentage you entered for items in the A group, it continues adding values until it reaches the percentage you entered for items in the B group. The system assigns all items whose value falls between the A and B percentages to the B group",
      C: "Default Starting point: The C group consists of items whose accumulated value exceeds the B percentage",
      D: "No Ranking"
    }
  },


   // Code 17
  marginInventoryDefinitions: {
    meta: {
      label: "MARGIN - INVENTORY",
      category: "BRANCH INFO: ADDITIONAL INFORMATION",
      owner: "finance",
      governance: "LOCAL",
      function: "A code indicating this item's ABC ranking by margin amount. Over time the ranking will recalculate automatically. New items are set to C.",
      dataType:  "radio",  
      changeRequest: "NO", 
      alias: "ABCM"
    },
     values: {DEFAULT: "C: Default Starting point",
      A: ":If an item's value causes the accumulated total to exceed the A accumulated percentage, the system assigns the item to the B group",
      B: "When the accumulated total reaches the percentage you entered for items in the A group, it continues adding values until it reaches the percentage you entered for items in the B group. The system assigns all items whose value falls between the A and B percentages to the B group",
      C: "Default Starting point: The C group consists of items whose accumulated value exceeds the B percentage",
      D: "No Ranking"
    }
  },

  // Code 18
  investmentInventoryDefinitions: {
    meta: {
      label: "INVESTMENT INVENTORY",
      category: "BRANCH INFO: ADDITIONAL INFORMATION",
      owner: "finance",
      governance: "LOCAL",
      function: "Code indicating this item's ABC ranking by investment in inventory.Over time the ranking will recalculate automatically. New items are set to C.", 
      dataType:  "radio",
      changeRequest: "NO", 
      alias: "ABCI"
    },
     values: {DEFAULT: "C: Default Starting point",
      A: ":If an item's value causes the accumulated total to exceed the A accumulated percentage, the system assigns the item to the B group",
      B: "When the accumulated total reaches the percentage you entered for items in the A group, it continues adding values until it reaches the percentage you entered for items in the B group. The system assigns all items whose value falls between the A and B percentages to the B group",
      C: "Default Starting point: The C group consists of items whose accumulated value exceeds the B percentage",
      D: "No Ranking"
    }
  },




  // Code 19
  serialNoRequiredDefinitions: {
    meta: {
      label: "SERIAL NO. REQUIRED",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: ['operations','quality'],
      governance: "GLOBAL",
      function: "Specifies whether a serial number gets attached to an item at receipt or sale. IF checked Y the system will require a serial number for all transactions pertaining to this item in related inventory, sales, and purchase order programs. Equpiment is the primary user of serial numbers (Not the same as a lot number)", 
      dataType:  "YesNo",  
      changeRequest: "YES", 
      alias: "SRNR"
    },

    values: {
      DEFAULT: "N: Serial Number Not Required",
      Y:	"Serial Number Required",
      N:	"Serial Number Not Required",
    }
  },




  // Code 20
  lotStatusCodeDefinitions: {
    meta: {
      label: "LOT STATUS CODE",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: "quality",
      governance: "LOCAL",
      function: "Add a default lot hold status to an item at lot creation. If you leave this field blank, it indicates that the lot is approved. All other codes indicate that the lot is on hold. Leave blank unless instructs otherwise.", 
      dataType:  "UDC",  
      changeRequest: "NO", 
      alias: "LOTS"
    },
    values: {
      DEFAULT: "Blank",
      DEPENDENT: "Quality provides the hold codes such as Q, R, T"
    }
  },






  // Code 21
  lotProcessTypeDefinitions: {
    meta: {
      label: "LOT PROCESS TYPE",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: "quality",
      governance: "GLOBAL",
      function: "A code that determines how lot or serial numbers are assigned in the Lot Master table", 
      dataType:  "numeric",  
      changeRequest: "YES", 
      alias: "SRCE"
    },
    values: {
      DEFAULT: {
        ADH: "2: Lots Assigned with Next Number",
        OLG: "2: Lots Assigned with Next Number",
        TOLL: "2: Lots Assigned with Next Number",
        "CHEMICAL RAWS" : "2: Lots Assigned with Next Number", 
        EQU: "0: Lots are Optional"
       },
    "0": "0: Lots are Optional",
    "1": "1: Lots Assigned using Date",
    "2": "2: Lots Assigned with Next Number",
    "3": "3: Lots must be Assigned Manually",
    "4": "4: Serial No Optional",
    "5": "5: Serial No Assigned Using Date",
    "6": "6: Serial No Assign with Next No",
    "7": "7: Serial No Assigned Manually"
    }
  },








  // Code 22
  countryOfOriginRequiredDefinitions: {
    meta: {
      label: "COUNTRY OF ORIGIN REQUIRED",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: "regulatory",
      governance: "GLOBAL",
      function: "A user defined code (H40/CD) that specifies if the system requires entry of the COI during inventory receipt. When activated, a country of origin will be required when creating a new lot or serial number. – Currently unused", 
      dataType:  "checkbox",  
      changeRequest: "YES", 
      alias: "COORE"
    },
    values: {
      DEFAULT: "Un-checked",
      CHECKED: "Checked",
      UNCHECKED: "Un-checked"
    }
  },




  // Code 23
  commitmentDateMethodDefinitions: {
    meta: {
      label: "COMMITMENT DATE METHOD",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: ['prodMan','supplyChain','operations','quality'],
      governance: "GLOBAL",
      function: "Establishes the method by which the system commits lots—our current configuration is exclusively set by expiration date. Alternative options include sell by, best before, and custom criteria", 
      dataType:  "udc",  
      changeRequest: "YES", 
      alias: "CMDM"
    },
    values: {
      DEFAULT: "1: Lot Expiration Date",
      "1": "Lot Expiration Date",
      "2": "Sell by Date",
      "3": "Best Before Date",
      "4-8": "Custom"
    }
  },





// Code 24
lotExpirationDateMethodDefinitions: {
  meta: {
    label: "LOT EXPIRATION DATE METHOD",
    category: "BRANCH INFO: LOT PROCESSING",
    owner: ["prodMan", "quality"],
    governance: "GLOBAL",
    function: "Method the system uses to calculate the expiration date for a lot. All equipment, bulk adhesive, oligomer, and toll items will be set to 1. All purchased items will also be set to 1. Any packaged finished good that contains a lot-coded adhesive, oligomer, or toll — whether packaged or bulk — in its BOM must be set to 3.",
    dataType: "numeric",
    changeRequest: "YES",
    alias: "LECM"
  },
  values: {
    DEFAULT: {
      "All P stocking types": "1: On Hand Date",
      "Manufactured Adhesive, Oligomer, or Toll with an M stocking type": "1: On Hand Date",
      "All Equipment": "1: On Hand Date",
      "Packaged Adhesive, Oligomer, or Toll with an S stocking type": "3: Least Active Ingredient Exp. Date"
    },
    "1": "1: On Hand Date",
    "2": "2: Based On Date",
    "3": "3: Least Active Ingredient Exp. Date"
  }
},




  // Code 25
  shelfLifeDaysDefinitions: {
    meta: {
      label: "SHELF LIFE DAYS",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: ['prodMan','supplyChain'],
      governance: "GLOBAL",
      function: "Determines the total shelf life of a product", 
      dataType:  "int",  
      changeRequest: "", 
      alias: "SLD"
    },
    values: {
      DEFAULT: "",
      DEPENDENT: {
        "Finished Goods": "Total Shelf life Provided by Product management",
        "Raw Materials" : "Total shelf life Provided by Supply chain",
        "Equipment": "3650 days"
      }
    }
  },











   // Code 26
  bestBeforeDefaultDaysDefinitions: {
    meta: {
      label: "BEST BEFORE DEFAULT DAYS",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: "BBDD"
    },
    values: {DEFAULT: ""}
  },


   // Code 27
  sellByDefaultDaysDefinitions: {
    meta: {
      label: "SELL BY DEFAULT DAYS",
      category: "BRANCH INFO: LOT PROCESSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: "SBDD"
    },
    values: {DEFAULT: ""}
  },


   // Code 28
  productTypeDefinitions: {
    meta: {
      label: "PRODUCT TYPE",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },

   // Code 29
  marketSegmentDefinitions: {
    meta: {
      label: "MARKET SEGMENT",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


   // Code 30
  productClassificationDefinitions: {
    meta: {
      label: "PRODUCT CLASSIFICATION",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


   // Code 31
  sisCd4Definitions: {
    meta: {
      label: "SIS CD4",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


   // Code 32
  sisCd5Definitions: {
    meta: {
      label: "SIS CD5",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },

  // Code 33
  preferredCarrierDefinitions: {
    meta: {
      label: "PREFERRED CARRIER",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  // Code 34
  catCd6Definitions: {
    meta: {
      label: "CAT CD6",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },

  // Code 35
  catCd7Definitions: {
    meta: {
      label: "CAT CD7",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },

  // Code 36
  catCd8Definitions: {
    meta: {
      label: "CAT CD8",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  // Code 37
  catCd9Definitions: {
    meta: {
      label: "CAT CD9",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },

  // Code 38
  categoryCode10Definitions: {
    meta: {
      label: "CATEGORY CODE 10",
      category: "CATEGORY CODES: SALES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  // Code 39
  commodityClassDefinitions: {
    meta: {
      label: "COMMODITY CLASS",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  // Code 40
  commoditySubClassDefinitions: {
    meta: {
      label: "COMMODITY SUB CLASS",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  supplierRebateCodeDefinitions: {
    meta: {
      label: "SUPPLIER REBATE CODE",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  masterPlanningFamilyDefinitions: {
    meta: {
      label: "MASTER PLANNING FAMILY",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  landedCostRuleDefinitions: {
    meta: {
      label: "LANDED COST RULE",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  preferredCarrierDefinitions: {
    meta: {
      label: "PREFERRED CARRIER",
      category: "CATEGORY CODES: PURCHASING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  shippingConditionsCodeDefinitions: {
    meta: {
      label: "SHIPPING CONDITIONS CODE",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  shippingCommodityClassDefinitions: {
    meta: {
      label: "SHIPPING COMMODITY CLASS",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  cycleCountDefinitions: {
    meta: {
      label: "CYCLE COUNT",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  itemDimensionGroupDefinitions: {
    meta: {
      label: "ITEM DIMENSION GROUP",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  warehouseProcessGrp1Definitions: {
    meta: {
      label: "WAREHOUSE PROCESS GRP 1",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  warehouseProcessGrp2Definitions: {
    meta: {
      label: "WAREHOUSE PROCESS GRP 2",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  warehouseProcessGrp3Definitions: {
    meta: {
      label: "WAREHOUSE PROCESS GRP 3",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  itemPoolCodeDefinitions: {
    meta: {
      label: "ITEM POOL CODE",
      category: "CATEGORY CODES: WAREHOUSING",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  orderPolicyDefinitions: {
    meta: {
      label: "ORDER POLICY",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  orderPolicyValueDefinitions: {
    meta: {
      label: "ORDER POLICY VALUE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  planningCodeDefinitions: {
    meta: {
      label: "PLANNING CODE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  planningFenceRuleDefinitions: {
    meta: {
      label: "PLANNING FENCE RULE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  planningFenceDefinitions: {
    meta: {
      label: "PLANNING FENCE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  freezeFenceDefinitions: {
    meta: {
      label: "FREEZE FENCE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  messageDisplayFenceDefinitions: {
    meta: {
      label: "MESSAGE DISPLAY FENCE",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  suppressMrpMessagesDefinitions: {
    meta: {
      label: "SUPPRESS MRP MESSAGES",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  leadtimeLevelDefinitions: {
    meta: {
      label: "LEADTIME LEVEL",
      category: "ADDITIONAL SYS: PLANNING CODES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  setupLaborDefinitions: {
    meta: {
      label: "SETUP LABOR",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  moveQueueHoursDefinitions: {
    meta: {
      label: "MOVE / QUEUE HOURS",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  ecoNumberDefinitions: {
    meta: {
      label: "ECO NUMBER",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  ecoReasonDefinitions: {
    meta: {
      label: "ECO REASON",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  ecoDateDefinitions: {
    meta: {
      label: "ECO DATE",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  issueAndReceiptDefinitions: {
    meta: {
      label: "ISSUE AND RECEIPT",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  replenishmentHoursDefinitions: {
    meta: {
      label: "REPLENISHMENT HOURS",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  accountingCostQtyDefinitions: {
    meta: {
      label: "ACCOUNTING COST QTY",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  issueTypeCodeDefinitions: {
    meta: {
      label: "ISSUE TYPE CODE",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  timeBasisDefinitions: {
    meta: {
      label: "TIME BASIS",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  itemRevisionLevelDefinitions: {
    meta: {
      label: "ITEM REVISION LEVEL",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  shrinkFactorDefinitions: {
    meta: {
      label: "SHRINK FACTOR",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  shrinkFactorMethodDefinitions: {
    meta: {
      label: "SHRINK FACTOR METHOD",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  leadtimeManufacturingDefinitions: {
    meta: {
      label: "LEADTIME MANUFACTURING",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  leadtimeCumulativeDefinitions: {
    meta: {
      label: "LEADTIME CUMULATIVE",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  leadtimePerUnitDefinitions: {
    meta: {
      label: "LEADTIME PER UNIT",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  fixedVariableDefinitions: {
    meta: {
      label: "FIXED/VARIABLE",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  mfgLeadtimeQuantityDefinitions: {
    meta: {
      label: "MFG LEADTIME QUANTITY",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  activeIngredientDefinitions: {
    meta: {
      label: "ACTIVE INGREDIENT",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  kanbanDefinitions: {
    meta: {
      label: "KANBAN",
      category: "ADDITIONAL SYS: OPPERATIONS, Warhousing",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  reorderQuantityDefinitions: {
    meta: {
      label: "REORDER QUANTITY",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  maximumReorderQtyDefinitions: {
    meta: {
      label: "MAXIMUM REORDER QTY",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  minimumReorderQtyDefinitions: {
    meta: {
      label: "MINIMUM REORDER QTY",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  reorderPointDefinitions: {
    meta: {
      label: "REORDER POINT",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  multipleOrderQuantityDefinitions: {
    meta: {
      label: "MULTIPLE ORDER QUANTITY",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  unitsPerContainerDefinitions: {
    meta: {
      label: "UNITS PER CONTAINER",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  safetyStockDefinitions: {
    meta: {
      label: "SAFETY STOCK",
      category: "QUANTITIES",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  fromUomDefinitions: {
    meta: {
      label: "FROM UOM",
      category: "UNIT OF MEASURE CONVERSIONS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },







  
  quantityDefinitions: {
    meta: {
      label: "QUANTITY",
      category: "UNIT OF MEASURE CONVERSIONS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  toUomDefinitions: {
    meta: {
      label: "TO UOM",
      category: "UNIT OF MEASURE CONVERSIONS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  costMethod07Definitions: {
    meta: {
      label: "COST METHOD 07",
      category: "COST METHODS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  costMethod08Definitions: {
    meta: {
      label: "COST METHOD 08",
      category: "COST METHODS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  seedCostDefinitions: {
    meta: {
      label: "SEED COST",
      category: "COST METHODS",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  supplierDefinitions: {
    meta: {
      label: "SUPPLIER",
      category: "Supplier/Item Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },







  itemNumberDefinitions: {
    meta: {
      label: "ITEM NUMBER",
      category: "Supplier/Item Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  normalRouteCodeDefinitions: {
    meta: {
      label: "NORMAL ROUTE CODE",
      category: "Supplier/Item Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },






  effectiveDateDefinitions: {
    meta: {
      label: "EFFECTIVE DATE",
      category: "Supplier/Item Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  expirationDateDefinitions: {
    meta: {
      label: "EXPIRATION DATE",
      category: "Supplier/Item Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },




  supplyBranchDefinitions: {
    meta: {
      label: "SUPPLY BRANCH",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },





  demandBranchDefinitions: {
    meta: {
      label: "DEMAND BRANCH",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  planFamilyDefinitions: {
    meta: {
      label: "PLAN FAMILY",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  transerLeadtimeDefinitions: {
    meta: {
      label: "TRANSER LEADTIME",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },


  effectiveFromDefinitions: {
    meta: {
      label: "EFFECTIVE FROM",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },



  effectiveThruDefinitions: {
    meta: {
      label: "EFFECTIVE THRU",
      category: "Branch Relationships",
      owner: "",
      governance: "",
      function: "", 
      dataType:  "",  
      changeRequest: "", 
      alias: ""
    },
    values: {DEFAULT: ""}
  },








  dataTypes: {
    udc: "User Defined Code",
    numeric: "Numeric System Defined Codes 1-n",
    yesNo: "Y or N",
    checkbox: "Checked or Unchecked",
    char: "alpha-numeric text",
    int: "Literal Integer"
  },




  links: {
    changeRequest: "https://app.smartsheet.com/b/form/019808f52c037d16a158ab85dfbd30ab"
  },



  owners:{
    supplyChain: "Supply Chain",
    fiance: "Finance",
    prodMan: "Product Management, Product Development",
    sop: "Sales and Operations Planning",
    operations: "Operations and manufacturing",
    regulatory: "Product regulatory",
    legal: "Legal",
    quality: "Quality Department",

    adhProductManagement: "Adhesive Product Management",
    olgProductManagement: "Oligomers Product Management",
    equProductDevelopment: "Equipment Product Development",
    
    adhEngineering: "Adhesive Engineering",
    olgEngineering: "Oligomer Engineering",
    equEngineering: "Equipment Engineering"
  }




};