


mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6ImNtNnozY2V1cDAwbTEybW9uNnI4dGV4eG4ifQ.tkb0d96wGhGW4-7Ds-iDCw';


// Map options
const mapOptions = {
  container: 'map-container', // container ID
  center: [-76.72802, 42.92211], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 5.9, // starting zoom
  minZoom: 5.5,
  maxZoom: 7,
  // bearing: 29,
  style: 'mapbox://styles/mapbox/light-v11',
  // hash: true
}

const coolMap = new mapboxgl.Map(mapOptions);


const markerOptions = {
  color: '#57068C',
}

// Scaling the circles on the map
const minCap = 1;
const maxCap = 270;
const minSize = 10;
const maxSize = 40;

function getScaledSize(capacity) {
  const clamped = Math.max(minCap, Math.min(maxCap, capacity));
  const scaled = ((clamped - minCap) / (maxCap - minCap)) * (maxSize - minSize) + minSize;
  return scaled;
}

// Chatter on popup
renewablesData.forEach((record) => {
  const popup = new mapboxgl.Popup({
    offset: 12,
  }).setHTML(
    `<div class="project-popup">
          <div class="project-title">Project ${record.project_name}</div>
          <div><strong>Location:</strong> ${record.location}</div>
          <div><strong>Capacity:</strong> ${record.capacity} megawatts</div>
          <div><strong>Developer:</strong> ${record.partnership}</div>
          <div><strong>Planned completion quarter:</strong> ${record.completion_quarter}</div>
        </div>`
  );

  // Removed from label because of redundancy:
  // <div><strong>Status:</strong> ${record.status}</div>
  // <div><strong>Type:</strong> ${record.project_type}</div>

  // Setting fill of circles based on project type
  let programColor = '#ccc';

  if (record.project_type === 'Solar' || record.project_type === 'Solar (DER)') {
    programColor = '#F7CB15'
  }

  if (record.project_type === 'Battery Energy Storage System') {
    programColor = '#06A77D'
  }



  // Scaling circles based on MW capacity
  const circleMarker = document.createElement('div');
  circleMarker.className = 'circle-marker';
  circleMarker.style.backgroundColor = programColor;

  const size = getScaledSize(record.capacity);
  circleMarker.style.width = `${size}px`;
  circleMarker.style.height = `${size}px`;


  // Set outline style based on status
  if (record.status === 'Ready to Build') {
    circleMarker.style.border = '1.5px solid #044E3A';
  } else if (record.status === 'Under Review') {
    circleMarker.style.border = '1.5px solid #B18F06';
  } else if (record.status === 'Planned') {
    circleMarker.style.border = '1.5px solid #8E8E90';
  }


  // Adding the marker to the map
  new mapboxgl.Marker({
    element: circleMarker
  })

    .setLngLat([record.longitude, record.latitude])
    .setPopup(popup)
    .addTo(coolMap)
})