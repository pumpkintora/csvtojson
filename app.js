let csvToJson = require('convert-csv-to-json');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("ACRA,53162215X,XZQT STYLE,Business,Sole Proprietor,na,na,Ceased Registration,2010-02-26T12:54:02,2010-03-02T00:00:00,LOCAL,357B,ADMIRALTY DRIVE,09,138,SUN BLISS,752357,na,na,na,na,0,46900,WHOLESALE TRADE OF A VARIETY OF GOODS WITHOUT A DOMINANT PRODUCT,PROVIDE PRODUCT SOURCING & DEVELOPMENT SERVICES,46413,WHOLESALE OF CHILDREN AND INFANTS' CLOTHING (INCLUDING PRODUCTS AND ACCESSORIES FOR INFANTS),PROVIDE PRODUCT SOURCING & DEVELOPMENT SERVICES,1,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na,na");

console.log(json)
