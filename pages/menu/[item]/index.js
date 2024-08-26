import { useRouter } from 'next/router';

const MenuItem = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      fontSize: '32px', 
      fontWeight: 'bold' 
    }}>
      {item ? item.replace(/-/g, ' ').toUpperCase() : 'LOADING...'}
    </div>
  );
};

export default MenuItem;
