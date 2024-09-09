import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useRecoilState } from 'recoil';
import { userState } from '../Recoil/atoms';
import SideNavbar from '../components/SideNavbar'

const MainLayout = () => {

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user){
      const accessToken = localStorage.getItem('access');
      if (accessToken) {
        try {
          const decoded = jwtDecode(accessToken);
          const userInfo = {
            userid: decoded.user.userid,
            firstname: decoded.user.first_name,
            lastname: decoded.user.last_name,
            email: decoded.user.email,
          };
          setUser(userInfo);
        } catch (error) {
          setUser(null);
          console.error('Failed to decode JWT token', error);
        }
      }
    }
  }, [user, setUser]);

  return (
    <SideNavbar/>
  )
}

export default MainLayout