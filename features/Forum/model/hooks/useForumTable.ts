export const useForumTable = () => {
  const toTheme = async (id: number) => {
    console.log("id", id)
    await navigateTo({
      path: "/forum/theme/" + id,
    });

  }

  function truncateText(text: string): string {
    if (text.length > 215) {
      return text.slice(0, 215) + '...';
    }
    return text;
  }


  return {
    truncateText,
    toTheme,
  };
};
