// store/modules/permission.js

const state = {
    sidebarRouters: [] // This will store the sidebar routes
};

const getters = {
    getSidebarRouters: (state) => state.sidebarRouters
};

const mutations = {
    setSidebarRouters: (state, routers) => {
        state.sidebarRouters = routers;
    }
};

const actions = {
    // You can fetch and set the sidebar routers from your router configuration
    fetchSidebarRouters({ commit }) {
        const router = require('@/router').default; // Adjust the path based on your project structure
        const routes = router.options.routes;

        // Filter out the parent routes (you may need a more sophisticated filter based on your actual routes structure)
        const sidebarRouters = routes.filter(route => !!route.children);

        // Commit the sidebar routers to the store
        commit('setSidebarRouters', sidebarRouters);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
