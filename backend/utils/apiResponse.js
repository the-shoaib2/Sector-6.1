/**
 * Represents an API response.
 */
class apiResponse {
    /**
     * Creates an instance of apiResponse.
     * 
     * @param {number} statusCode - The HTTP status code of the response.
     * @param {Object} data - The data to be sent in the response.
     * @param {string} [message="Success"] - A message describing the response.
     */
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export default apiResponse;
