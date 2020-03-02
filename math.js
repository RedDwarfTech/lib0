/**
 * @module math
 */
export const floor = Math.floor
export const ceil = Math.ceil
export const abs = Math.abs
export const imul = Math.imul
export const round = Math.round
export const log10 = Math.log10
export const log2 = Math.log2
export const log = Math.log
export const sqrt = Math.sqrt

/**
 * @function
 * @param {number} a
 * @param {number} b
 * @return {number} The sum of a and b
 */
export const add = (a, b) => a + b

/**
 * @function
 * @param {number} a
 * @param {number} b
 * @return {number} The smaller element of a and b
 */
export const min = (a, b) => a < b ? a : b

/**
 * @function
 * @param {number} a
 * @param {number} b
 * @return {number} The bigger element of a and b
 */
export const max = (a, b) => a > b ? a : b

export const isNaN = Number.isNaN

export const pow = Math.pow
/**
 * Base 10 exponential function. Returns the value of 10 raised to the power of pow.
 *
 * @param {number} exp
 * @return {number}
 */
export const exp10 = exp => Math.pow(10, exp)
