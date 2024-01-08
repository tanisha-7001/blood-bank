import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createBloodDonor } from './graphql/mutations';
import { listBloodDonors } from './graphql/queries';

const initialState = { name: '', bloodType: '' };
const client = generateClient();

const AdminDashboard = () => {
  const [formState, setFormState] = useState(initialState);
  const [bloodDonors, setBloodDonors] = useState([]);

  useEffect(() => {
    fetchBloodDonors();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchBloodDonors() {
    try {
      const bloodDonorData = await client.graphql({
        query: listBloodDonors
      });  
      const donors = bloodDonorData.data.listBloodDonors.items || [];
  
      setBloodDonors(donors);
    } catch (err) {
      console.error('Error fetching blood donors:', err);
    }
  }
  

  async function addBloodDonorToDB() {
    try {
      if (!formState.name || !formState.bloodType) return;
      const donor = { ...formState };
      setBloodDonors([...bloodDonors, donor]);
      setFormState(initialState);
      await client.graphql({
        query: createBloodDonor,
        variables: {
          input: donor
        }
      });
    } catch (err) {
      console.log('Error adding blood donor:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Blood Donor Management</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput('bloodType', event.target.value)}
        style={styles.input}
        value={formState.bloodType}
        placeholder="Blood Type"
      />
      <button style={styles.button} onClick={addBloodDonorToDB}>
        Add Blood Donor
      </button>
      <h3>Blood Donors</h3>
      {bloodDonors.map((donor, index) => (
        <div key={donor.id ? donor.id : index} style={styles.donor}>
          <p style={styles.donorInfo}>{`Name: ${donor.name}, Blood Type: ${donor.bloodType}`}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  donor: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  donorInfo: { fontSize: 16 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
    marginBottom: 10,
    cursor: 'pointer',
  }
};

export default AdminDashboard;
