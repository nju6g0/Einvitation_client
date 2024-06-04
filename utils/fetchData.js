import { API_URL } from "constants/domain";

async function fetchData(url, token) {
  const JWTtoken = token || JSON.parse(localStorage.getItem("token"));
  const headers = new Headers();
  if (JWTtoken) {
    headers.append("Authorization", JWTtoken);
  }
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers,
    });
    const result = await response.json();
    if (!response.ok) {
      return {
        error: true,
        statusCode: response.status,
        errorMessage: result.message,
      };
    }
    return result;
  } catch (error) {
    return {
      error: true,
      statusCode: 404,
      errorMessage: error.message,
    };
  }
}

export default fetchData;
