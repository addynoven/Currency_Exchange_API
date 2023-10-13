const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.json("server is up and ready for request !!!");
});
let curreny = [
    "AED",
    "ARS",
    "AUD",
    "BGN",
    "BHD",
    "BND",
    "BRL",
    "BWP",
    "CAD",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IRR",
    "ISK",
    "JPY",
    "KRW",
    "KWD",
    "KZT",
    "LKR",
    "LYD",
    "MUR",
    "MXN",
    "MYR",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PHP",
    "PKR",
    "PLN",
    "QAR",
    "RON",
    "RUB",
    "SAR",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "TTD",
    "TWD",
    "USD",
    "VEF",
    "ZAR",
];
let options = [
    "Emirati Dirham",
    "Argentine Peso",
    "Australian Dollar",
    "Bulgarian Lev",
    "Bahraini Dinar",
    "Bruneian Dollar",
    "Brazilian Real",
    "Botswana Pula",
    "Canadian Dollar",
    "Swiss Franc",
    "Chilean Peso",
    "Chinese Yuan Renminbi",
    "Colombian Peso",
    "Czech Koruna",
    "Danish Krone",
    "Euro",
    "British Pound",
    "Hong Kong Dollar",
    "Croatian Kuna",
    "Hungarian Forint",
    "Indonesian Rupiah",
    "Israeli Shekel",
    "Indian Rupee",
    "Iranian Rial",
    "Icelandic Krona",
    "Japanese Yen",
    "South Korean Won",
    "Kuwaiti Dinar",
    "Kazakhstani Tenge",
    "Sri Lankan Rupee",
    "Libyan Dinar",
    "Mauritian Rupee",
    "Mexican Peso",
    "Malaysian Ringgit",
    "Norwegian Krone",
    "Nepalese Rupee",
    "New Zealand Dollar",
    "Omani Rial",
    "Philippine Peso",
    "Pakistani Rupee",
    "Polish Zloty",
    "Qatari Riyal",
    "Romanian New Leu",
    "Russian Ruble",
    "Saudi Arabian Riyal",
    "Swedish Krona",
    "Singapore Dollar",
    "Thai Baht",
    "Turkish Lira",
    "Trinidadian Dollar",
    "Taiwan New Dollar",
    "US Dollar",
    "Venezuelan Bolivar",
    "South African Rand",
];

const supported_Currencies = curreny.map((ele, idx) => {
    return { name: options[idx], code: ele };
});
router.get("/help", (req, res) => {
    console.log(supported_Currencies.length);
    const apiInfo = {
        name: "Currency Converter API",
        version: "1.0.0",
        description: "An API for currency conversion",
        "all currency we support": supported_Currencies,
    };
    res.json(apiInfo);
});

router.get(
    "/conversion/from/:from_code/to/:to_code/amount/:amount",
    function (req, res, next) {
        let from_code = req.params.from_code.toUpperCase();
        let to_code = req.params.to_code.toUpperCase();
        let amount = req.params.amount.toUpperCase();
        if (!curreny.find((code) => code === from_code)) {
            res.json(
                "error -> from_code code is not send correctly!!!\n check /help for money info"
            );
        } else if (!curreny.find((code) => code === to_code)) {
            res.json(
                "error -> to_code code is not send correctly!!!\n check /help for money info"
            );
        } else {
            var result = null;
            (async () => {
                const response = await axios.get(
                    `https://www.x-rates.com/calculator/?from=${from_code}&to=${to_code}&amount=${amount}`
                );
                const html = await response.data;
                const $ = cheerio.load(html);
                result = $(".ccOutputRslt").first().text();
                await console.log(result);
                await res.json(result);
            })();
        }
    }
);

module.exports = router;
