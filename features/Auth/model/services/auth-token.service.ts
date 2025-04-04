
export const useAuthTokenService = () => {
   enum EnumTokens {
    "ACCESS_TOKEN" = "access_token",
    "REFRESH_TOKEN" = "refresh_token",
  }
  const accessToken = useCookie(EnumTokens.ACCESS_TOKEN);

   const getAccessToken = () => {
    return accessToken.value || ''; 
  };
  
  return {accessToken}
}
