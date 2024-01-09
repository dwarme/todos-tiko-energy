function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
}

export const cookieAuthSaveToken = ({tokenRefresh, tokenAccess}: {tokenRefresh: string; tokenAccess: string})=>{
    const dateTokenAccess = new Date();
    const dateTokenRefresh = new Date();

    dateTokenAccess.setTime(dateTokenAccess.getTime() + (60*60*1000));
    dateTokenRefresh.setTime(dateTokenRefresh.getTime() + (1*24*60*60*1000));

    let tokenAccessExpires = `expires=${dateTokenAccess.toUTCString()}`;
    let tokenRefreshExpires = `expires=${dateTokenRefresh.toUTCString()}`;

    document.cookie = `token_access=${tokenAccess};${tokenAccessExpires};path=/`;
    document.cookie = `token_refresh=${tokenRefresh};${tokenRefreshExpires};path=/`;
}

export const cookieAuthGetToken = ()=>{
    const tokenAccess = getCookie("token_access");
    const tokenRefresh = getCookie("token_refresh");

    return {tokenAccess, tokenRefresh}
}