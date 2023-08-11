import htppService from "./http.service";

const teamEndpoint = "team/";

const teamService = {
    fetchAll: async () => {
        const { data } = await htppService.get(teamEndpoint);
        return data;
    },
    get: async (id) => {
        const { data } = await htppService.get(teamEndpoint + id);
        return data;
    },
    update: async (id, payload) => {
        const { data } = await htppService.patch(
            teamEndpoint + id,
            payload
        );
        return data;
    }
};

export default teamService;
