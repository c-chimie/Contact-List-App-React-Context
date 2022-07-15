const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			newContact: {},
			contactList: [],
		},

		actions: {
			addContact: (data) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
			},
		},
	};
};

export default getState;
