"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCryptoById = exports.fetchAndStoreCryptos = void 0;
const cryptoData_1 = require("../data/cryptoData");
const cryptoSchema_1 = require("../models/cryptoSchema");
const fetchAndStoreCryptos = async () => {
    const existing = await cryptoSchema_1.cryptoSchema.find().lean(); // הופך למסמכים רגילים
    if (existing.length > 0) {
        return existing;
    }
    const data = await (0, cryptoData_1.fetchCryptoData)();
    await cryptoSchema_1.cryptoSchema.insertMany(data);
    return data;
};
exports.fetchAndStoreCryptos = fetchAndStoreCryptos;
const fetchCryptoById = async (id, days = 7) => {
    const detailUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
    const historyUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
    const [detailRes, historyRes] = await Promise.all([
        fetch(detailUrl),
        fetch(historyUrl)
    ]);
    if (!detailRes.ok || !historyRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const detail = await detailRes.json();
    const history = await historyRes.json();
    return {
        detail,
        history: history.prices
    };
};
exports.fetchCryptoById = fetchCryptoById;
