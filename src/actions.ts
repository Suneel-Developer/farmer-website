export const SET_SELECTED_NETWORK = 'SET_SELECTED_NETWORK';

export const setSelectedNetwork = (network: any) => {
  return {
    type: SET_SELECTED_NETWORK,
    payload: network,
  };
};
