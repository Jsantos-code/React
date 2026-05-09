import './Profile.css'

export default function Profile() {

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <>
      <h1>{user.name}</h1>
      <h1 style={{color: '#8C403A'}}>Welcome Back, Admin.</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}