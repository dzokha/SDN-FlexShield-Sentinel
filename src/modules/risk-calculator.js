// src/modules/risk-calculator.js

export function calculateRiskScore(indicators) {
    const baseScore = indicators.length * 15;
    return Math.min(baseScore, 100);
}

export const RISK_LEVELS = {
    LOW: "LOW RISK",
    MEDIUM: "MEDIUM RISK",
    HIGH: "HIGH RISK"
};