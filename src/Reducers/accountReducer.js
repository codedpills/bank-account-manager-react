const initialState = {
  accounts: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return { ...state, accounts: [...state.accounts, action.payload] };

    case "EDIT_ACCOUNT":
      const newAccounts = state.accounts.map((account) => {
        if (account.id === action.id) {
          return {
            id: account.id,
            account_name: action.account.account_name,
            account_number: action.account.account_number,
            account_type: action.account.account_type,
            bank_name: action.account.bank_name,
            bank_branch: action.account.bank_branch,
          };
        }
        return account;
      });
      return { ...state, accounts: newAccounts };

      case "DELETE_ACCOUNT":
        const savedAccounts = state.accounts.filter(
          (account) => account.id !== action.id
        );

        return { ...state, accounts: savedAccounts };

    default:
      return state;
  }
};

export default accountReducer;
