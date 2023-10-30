# Currency Converter API

Currency Converter API is a RESTful API developed in Node.js, allowing users to convert between different currencies. This API uses exchange rate data to provide accurate and up-to-date conversion results.

## Features

- **Currency Conversion:** Enables users to convert between various currencies.
- **Up-to-Date Exchange Rates:** Provides accurate conversion rates based on the latest data.
- **RESTful API:** Allows easy integration and usage within other applications.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/addynoven/currency_converter_api.git
    cd currency_converter_api
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start the Server:**

    ```bash
    npm start
    ```

    The server will start at a specified port (by default, port 3000).

## Usage

### Convert Currency

- **Endpoint:** `/conversion/from/:from_code/to/:to_code/amount/:amount`
- **Method:** `GET`

Send a GET request to the endpoint with the following parameters:
    - `from_code`: The currency code to convert from.
    - `to_code`: The currency code to convert to.
    - `amount`: The amount to convert.

#### Example

`GET /conversion/from/USD/to/EUR/amount/100`


Response:
```json
83.55
```
The above example returns the converted amount from USD to EUR for an amount of 100.

Replace from_code, to_code, and amount in the URL with your desired currency codes and amount to perform currency conversion.

Note: Ensure that the provided currency codes and amounts are valid and follow the format specified.

## API Reference

- **GET** `/conversion/from/:from_code/to/:to_code/amount/:amount`
  - Use this endpoint to perform currency conversion.

## Dependencies

- Node.js
- Express
- axios

## Contributing

Feel free to contribute to this project by forking the repository and creating pull requests with your changes or enhancements.

## License

This project is licensed under the [Apache License 2.0](https://github.com/addynoven/currency_converter_api/blob/main/LICENSE) License - see the LICENSE.md file for details.

## Acknowledgements

Mention any contributors or resources that you found helpful in creating this API.

For more detailed instructions or further information, visit the GitHub repository: [Currency Converter API](https://github.com/addynoven/currency_converter_api)
