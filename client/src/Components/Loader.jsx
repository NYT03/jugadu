const Loader = () => {
  const loaderStyle = {
    width: '150px',
    height: '150px',
    position: 'relative',
  }

  const elementStyle = {
    position: 'absolute',
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={loaderStyle}>
        <div style={{
          ...elementStyle,
          width: '15px',
          height: '65px',
          backgroundColor: '#f4b400',
          animation: 'move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }} />
        <div style={{
          ...elementStyle,
          width: '15px',
          height: '60px',
          backgroundColor: '#db4437',
          transform: 'rotate(90deg)',
          animation: 'move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }} />
        <div style={{
          ...elementStyle,
          width: '1px',
          height: '40px',
          opacity: 0.3,
          top: 0,
          left: '8%',
          backgroundColor: '#0f9d58',
          animation: 'effect 0.2s 0.1s infinite linear',
        }} />
        <div style={{
          ...elementStyle,
          width: '60px',
          height: '1px',
          opacity: 0.8,
          top: '8%',
          left: 0,
          backgroundColor: '#4285f4',
          animation: 'effect 0.3s 0.2s infinite linear',
        }} />
        <div style={{
          ...elementStyle,
          top: '10%',
          left: '12%',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          fontWeight: 900,
          fontSize: '18px',
          color: '#4285f4',
          animation: 'rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }}>
          X
        </div>
        <div style={{
          ...elementStyle,
          width: '1px',
          height: '40px',
          opacity: 0.3,
          top: '90%',
          right: '10%',
          backgroundColor: '#db4437',
          animation: 'effect 0.2s 0.1s infinite linear',
        }} />
        <div style={{
          ...elementStyle,
          width: '40px',
          height: '1px',
          opacity: 0.3,
          top: '100%',
          right: 0,
          backgroundColor: '#f4b400',
          animation: 'effect 0.3s 0.2s infinite linear',
        }} />
        <div style={{
          ...elementStyle,
          top: '100%',
          right: 0,
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          fontSize: '32px',
          color: '#0f9d58',
          animation: 'scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }}>
          *
        </div>
        <div style={{
          ...elementStyle,
          width: '1px',
          height: '20px',
          bottom: 0,
          left: 0,
          transform: 'rotate(45deg)',
          backgroundColor: '#f4b400',
          animation: 'height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }} />
        <div style={{
          ...elementStyle,
          width: '20px',
          height: '1px',
          bottom: '50%',
          left: 0,
          backgroundColor: '#0f9d58',
          animation: 'width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1)',
        }} />
      </div>
    </div>
  )
}

export default Loader
