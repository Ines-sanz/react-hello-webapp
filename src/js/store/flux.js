const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      url: "https://playground.4geeks.com/contact/",
      selected: null,
      contacts: null,
    },
    actions: {
      setSelected: (contact) => setStore({ selected: contact }),

      createAgenda: async () => {
        try {
          const resp = await fetch(getStore().url + "agendas/ines-sanz", {
            method: "POST",
          });
          if (!resp.ok) throw new Error("error while creating agenda");
          const data = await resp.json();
          getActions().getUserAgenda();
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      createContact: async (contact) => {
        try {
          const resp = await fetch(
            getStore().url + "agendas/ines-sanz/contacts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );
          if (!resp.ok) throw new Error("error while creating contact");
          const data = await resp.json();
          return getActions().getUserAgenda();
        } catch (error) {
          console.error(error);
        }
      },

      getUserAgenda: async () => {
        try {
          const resp = await fetch(getStore().url + "agendas/ines-sanz");
          if (resp.status === 404) return getActions().createAgenda();
          if (!resp.ok) throw new Error("error while getting agenda");
          const data = await resp.json();
          setStore({ contacts: data });
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      updContact: async (id, contact) => {
        try {
          const resp = await fetch(
            getStore().url + "agendas/ines-sanz/contacts/" + id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contact),
            }
          );
          if (!resp.ok) throw new Error("error while updating contact");
          const data = await resp.json();
		  return getActions().getUserAgenda();
        } catch (error) {
          console.error(error);
        }
      },

      delContact: async (id) => {
        try {
          const resp = await fetch(
            getStore().url + "agendas/ines-sanz/contacts/" + id,{
				method:'DELETE',
			}
          );
          if (!resp.ok) throw new Error("error while deleting contact");
          const data = await resp.json();
          return getActions().getUserAgenda();
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
};

export default getState;
