import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { addBloodDonor } from './graphql/mutations';
import { getAvailableBlood } from './graphql/queries';

const initialState = {
  name: '',
  bloodType: '',
  contactNumber: '',
  location: '',
};

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
      const bloodData = await client.graphql({
        query: getAvailableBlood,
      });
      const bloodDonors = bloodData.data.getAvailableBlood;
      setBloodDonors(bloodDonors);
    } catch (err) {
      console.error('Error fetching blood donors:', err);
    }
  }

  async function addBloodDonor() {
    try {
      if (!formState.name || !formState.bloodType || !formState.contactNumber || !formState.location) {
        return;
      }
      const newBloodDonor = { ...formState };
      setBloodDonors([...bloodDonors, newBloodDonor]);
      setFormState(initialState);

      await client.graphql({
        query: addBloodDonor,
        variables: {
          input: newBloodDonor,
        },
      });

      fetchBloodDonors();
    } catch (err) {
      console.error('Error adding blood donor:', err);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.column}>
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
        <input
          onChange={(event) => setInput('contactNumber', event.target.value)}
          style={styles.input}
          value={formState.contactNumber}
          placeholder="Contact Number"
        />
        <input
          onChange={(event) => setInput('location', event.target.value)}
          style={styles.input}
          value={formState.location}
          placeholder="Location"
        />
        <button style={styles.button} onClick={addBloodDonor}>
          Add Blood Donor
        </button>
      </div>

      <div style={styles.column}>
        <h2>Available Blood</h2>
        <ul>
          {bloodDonors.map((donor) => (
            <div key={donor.id} style={styles.bloodDonor}>
              <p style={styles.donorInfo}>
                {donor.bloodType}  available
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 800,
    margin: '0 auto',
    padding: 20,
  },
  column: {
    flex: 1,
    marginLeft: 20,
  },
  bloodDonor: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
    width: '100%',
  },
  donorInfo: { fontSize: 18, fontWeight: 'bold', marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default AdminDashboard;
