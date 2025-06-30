export const setStatusFilter = ({ status }: { status: string }) => {
  return {
    type: "task/SET_STATUS_FILTER",
    payload: status,
  };
};
