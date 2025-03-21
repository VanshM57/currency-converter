# Currency Converter

This project is a **Currency Converter** application built using React and Vite. It allows users to convert amounts between different currencies in real-time using live exchange rates.

## Functionality

1. **Currency Conversion**:
   - Users can input an amount in one currency and convert it to another currency.
   - The application fetches live exchange rates from an external API to ensure accurate conversions.

2. **Currency Selection**:
   - Dropdown menus allow users to select the source and target currencies.
   - The application supports a wide range of currencies.

3. **Swap Currencies**:
   - A "Swap" button enables users to quickly exchange the source and target currencies without re-entering data.

4. **Real-Time Results**:
   - The converted amount is displayed instantly after fetching the exchange rate.

5. **Error Handling**:
   - The application gracefully handles errors, such as network issues or invalid API responses, and displays appropriate error messages.

6. **Loading State**:
   - A loading indicator is displayed while fetching exchange rates to improve user experience.

## Techniques Used

1. **React**:
   - The application is built using React, a popular JavaScript library for building user interfaces.
   - Functional components and React hooks (e.g., `useState`, `useEffect`) are used for state management and side effects.

2. **Vite**:
   - Vite is used as the build tool for fast development and optimized production builds.

3. **API Integration**:
   - The application integrates with a live exchange rate API (e.g., ExchangeRate-API) using Axios for HTTP requests.

4. **State Management**:
   - React's `useState` is used to manage the application's state, such as the input amount, selected currencies, and conversion results.

5. **Dynamic Rendering**:
   - The UI dynamically updates based on user input and API responses.

6. **CSS Styling**:
   - The application is styled using CSS to provide a clean and responsive user interface.

7. **Error and Loading Handling**:
   - Conditional rendering is used to display loading indicators and error messages based on the application's state.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **Axios**: For making API requests.
- **CSS**: For styling the application.

## How It Works

1. The user enters an amount and selects the source and target currencies.
2. When the "Convert" button is clicked, the application sends a request to the exchange rate API to fetch the latest rates.
3. The application calculates the converted amount and displays it to the user.
4. The "Swap" button allows users to quickly exchange the source and target currencies.

This project demonstrates the use of modern web development techniques and tools to create a functional and user-friendly application.