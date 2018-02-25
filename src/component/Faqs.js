import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import CustomHeader from './CustomHeader'

class Faqs extends Component {
    render() {
        return (
            <View>
            	<CustomHeader title="Login" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
            	<ScrollView>
            	<Text style={ styles.container }>
            		
	            	<Text style={ styles.question }>
	            		What is RemAssis?
	            	</Text>

	            	<Text style={ styles.answer }>
						RemAssis is a platform to connect patients, doctor, hospitals and medical labs online and integrates all key 
						medical processes – booking appointments, storing doctors diagnosis & suggested tests online, loading lab test 
						results online, payment of consulting and testing fees etc. RemAssis is not meant to be an advisory or promotional 
						tool; rather it facilitates medical processes and allows you to make a choice from a wide range of independent options.
					</Text>
	            	<Text style={ styles.question }>
						Why should I use RemAssis? 
					</Text>
	            	<Text style={ styles.answer }>
						With RemAssis you have the ability to view a wide list of doctors, hospitals medical labs, classified by specialties.
						You can directly request for appointments at a convenient date and time and avail the option of using teleconferencing
						and video consulting facilities. All medical records including the doctor’s diagnosis, prescription, suggested tests 
						and test results are available to you 24*7. Alerts, notifications and reminders are available to help you manage your 
						health schedule. And all of this is available on an easy to use interface that can be accessed by anyone, anytime.
					</Text>
	            	<Text style={ styles.question }>
						How can I access RemAssis? 
					</Text>
	            	<Text style={ styles.answer }>
						RemAssis is absolutely free to use and is available on the web and on mobile devices. On the web, you can access 
						RemAssis by going to www.remassis.com . For mobile devices, you can download the free app available on Google Play 
						store and Apple App Store. Once you fill in a simple registration form, a login id and password will be sent to you 
						through email and SMS. You can use those credentials to login to RemAssis going forward.
					</Text>
	            	<Text style={ styles.question }>
						How can I book an appointment through RemAssis? 
					</Text>
	            	<Text style={ styles.answer }>
						You can search for a particular doctor or hospital, specialty area or location and RemAssis provides all doctors 
						or hospitals meeting your criteria. Available slots for each doctor or hospital are displayed and you can directly 
						request for an appointment at a convenient day and time. The doctor or medical staff directly confirm the appointment 
						or suggest a different slot. You will receive a notification once your request is processed.
					</Text>
	            	<Text style={ styles.question }>
						How do I make a payment online for a consultation or a test? 
					</Text>
	            	<Text style={ styles.answer }>
						You have the option of making a direct online payment through your credit card, debit card or net banking. 
						All online transactions happen through a secure payment gateway that guarantees 100% financial data security. 
						You can also make the payment in the hospital or clinic, but online payment is the more recommended option as 
						it helps you save time and not face the hassles of queues at the medical center.
					</Text>
	            	<Text style={ styles.question }>
						What medical records can I access on RemAssis? 
					</Text>
	            	<Text style={ styles.answer }>
						All your medical records can be available 24*7 on RemAssis for you to refer to. 
						These include - doctor’s diagnosis, prescription, suggested tests and test results. 
						If you avail teleconferencing or video conferencing facilities, the audio recording transcript would be available. 
						All these medicals are permanently stored in an electronic format in your RemAssis account lifelong.
					</Text>
	            	<Text style={ styles.question }>
						What about data security, confidentiality and privacy? 
					</Text>
	            	<Text style={ styles.answer }>
						All sensitive and personal data are kept completely confidential and is not available to anyone other than you. 
						RemAssis has a built in security system that does not allow the system to be hacked or private data to be accessed. 
						To make sure that your account is secure, please do not share your unique login id and password with anyone.
	            	</Text>
	            </Text>
	            </ScrollView>
            </View>

        );
    }
}

export default Faqs;


const styles = StyleSheet.create({
	container: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20,
		marginBottom: 40,
		fontFamily: 'Helvetica',
	},
    question: {
        fontWeight: 'bold',
        paddingBottom: 20
    },
    answer: {
    }

});
