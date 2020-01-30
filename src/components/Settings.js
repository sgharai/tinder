import React, {Component} from 'react'

class Settings extends Component {
    state = {
            bio: "",
            otherPics: [],
            notifications: false,
            genderPreference: "both",
            ageRange: [18, 80],
            distance: [0, 10]
        }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    type="text" 
                    value={this.state.bio} 
                    name="bio" 
                    placeholder="Tell us about yourself!" 
                    onChange={this.handleChange} 
                />
                <br />
                
                
                <br />
                
                <label>
                    <input 
                        type="checkbox" 
                        name="notifications"
                        checked={this.state.notifications}
                        onChange={this.handleChange}
                    /> Notifications
                </label>
                <br />
               
                {/* Formik */}
                <br />
                
                <label>I'm interested in: </label>
                <select 
                    value={this.state.genderPreference}
                    onChange={this.handleChange}
                    name="genderPreference"
                >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="red">Both</option>

                </select>
                <br /><br />
                <button>Save</button>
            </form>
        )
    }
}

export default Settings