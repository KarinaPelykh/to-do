type State = {
  filter: {
    status: string;
  };
};

export const statusFilterSelector = (state: State) => state.filter.status;
