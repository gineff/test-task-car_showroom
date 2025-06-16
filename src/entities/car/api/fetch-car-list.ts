import { API_ORIGIN } from '@/shared/config';
import { itemsPerPage } from '../config';
import { ApiResponse, FetchCarListParams } from '../types';

const SERVICE_URL = `${API_ORIGIN}/cars`;

export const fetchCarList = async (params: FetchCarListParams = {}): Promise<ApiResponse> => {
  const defaultParams = {
    _page: 1,
    _limit: itemsPerPage,
    ...params,
  };

  const queryParams = new URLSearchParams();

  Object.entries(defaultParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value.toString());
    }
  });

  try {
    const response = await fetch(`${SERVICE_URL}?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData: ApiResponse = await response.json();

    return {
      data: responseData.data,
      meta: responseData.meta,
    };
  } catch (error) {
    console.error('Failed to fetch car list:', error);
    throw error;
  }
};
