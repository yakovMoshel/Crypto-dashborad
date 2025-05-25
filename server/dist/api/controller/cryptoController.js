"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoDetails = exports.getCryptos = void 0;
const crypto_Service_1 = require("../services/crypto.Service");
const getCryptos = async (req, res) => {
    try {
        const data = await (0, crypto_Service_1.fetchAndStoreCryptos)();
        res.json(data);
    }
    catch (err) {
        console.error('Error in getCryptos:', err);
        res.status(500).json({ message: 'Error fetching cryptocurrency data' });
    }
};
exports.getCryptos = getCryptos;
const getCryptoDetails = async (req, res) => {
    const { id } = req.params;
    const days = req.query.days || 7;
    try {
        const data = await (0, crypto_Service_1.fetchCryptoById)(id, Number(days));
        res.json(data);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch full crypto data' });
    }
};
exports.getCryptoDetails = getCryptoDetails;
