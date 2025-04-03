export const useForumStore = defineStore('forum', {
    state: () => {
        return { activeTab: ETabs.top }
    },
    actions: {
        setActiveTab(tab: ETabs) {
            console.log('tab', this.activeTab)
            this.activeTab = tab;
        },
    },
});
