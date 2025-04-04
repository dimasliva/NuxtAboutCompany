export const useForumStore = defineStore('forum', {
    state: () => {
        return { 
            tab: ETabs.top,
            page: 1,
         }
    },
    actions: {
        setTab(tab: ETabs) {
            this.tab = tab;
        },
        setPage(value: number) {
            this.page = value;
        },
    },
});
