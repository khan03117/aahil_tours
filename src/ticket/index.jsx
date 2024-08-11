// import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../assets/vistara.png'; // Adjust the path as necessary

const Ticket = () => {
    const styles = StyleSheet.create({
        page: {
            padding: 20,
            backgroundColor: '#FFFFFF',
            fontSize: 12,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 10,
            borderBottom: '1px solid #000',
        },
        logo: {
            width: 150,
            height: 50,
        },
        sectionTitle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginVertical: 10,
            borderBottom: '1px solid #000',
            paddingBottom: 5,
        },
        table: {
            display: 'table',
            width: 'auto',
            borderStyle: 'solid',
            borderColor: '#000',
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
        },
        tableRow: {
            flexDirection: 'row',
        },
        tableColHeader: {
            width: '33%',
            borderStyle: 'solid',
            borderColor: '#000',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            padding: 5,
            fontWeight: 'bold',
        },
        tableCol: {
            width: '33%',
            borderStyle: 'solid',
            borderColor: '#000',
            borderBottomWidth: 1,
            borderRightWidth: 1,
            padding: 5,
        },
        text: {
            fontSize: 12,
        },
        boldText: {
            fontWeight: 'bold',
        },
        policySection: {
            marginTop: 10,
            paddingTop: 10,
            borderTop: '1px solid #000',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section with Logo */}
                <View style={styles.header}>
                    <Image src={logo} style={styles.logo} />
                    <Text style={styles.boldText}>E-Ticket</Text>
                </View>

                <Text style={styles.sectionTitle}>Flight Details</Text>

                {/* Flight Information Table */}
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>Flight</Text>
                        <Text style={styles.tableColHeader}>Route</Text>
                        <Text style={styles.tableColHeader}>Class</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>SpiceJet SG-2941</Text>
                        <Text style={styles.tableCol}>Jaipur (JAI) - Amritsar (ATQ)</Text>
                        <Text style={styles.tableCol}>Economy</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Passenger Details</Text>

                {/* Passenger Information Table */}
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>Name</Text>
                        <Text style={styles.tableColHeader}>PNR</Text>
                        <Text style={styles.tableColHeader}>E-Ticket Number</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>John Doe</Text>
                        <Text style={styles.tableCol}>2668314</Text>
                        <Text style={styles.tableCol}>NF1EM1CN3JXSM0714558</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Baggage Information</Text>

                {/* Baggage Information Table */}
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>Traveller</Text>
                        <Text style={styles.tableColHeader}>Cabin</Text>
                        <Text style={styles.tableColHeader}>Check-in</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableCol}>Adult</Text>
                        <Text style={styles.tableCol}>7 Kgs (1 piece only)</Text>
                        <Text style={styles.tableCol}>15 Kgs (1 piece only)</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Important Information</Text>

                {/* Important Information Section */}
                <View style={styles.policySection}>
                    <Text style={[styles.text, styles.boldText]}>Important Information</Text>
                    <Text style={styles.text}>
                        You must carry a valid government ID for all the travellers at the time of check-in.
                        For infant travellers, it is mandatory to carry the date of birth certificate.
                    </Text>
                    <Text style={styles.text}>
                        Please arrive at the airport at least 2 hours before departure for domestic flights and 4 hours for international flights.
                    </Text>
                    <Text style={styles.text}>
                        Your ability to travel is at the sole discretion of the airport authorities. The airline shall not be held responsible.
                    </Text>
                    <Text style={styles.text}>
                        Ensure you check in online 24 hours before departure, select seats, add baggage if needed, and print or save your boarding pass.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>Cancellation Policy</Text>

                {/* Cancellation Policy Section */}
                <View style={styles.policySection}>
                    <Text style={[styles.text, styles.boldText]}>Cancellation Policy</Text>
                    <Text style={styles.text}>0 hours to 2 hours before departure: Non Refundable</Text>
                    <Text style={styles.text}>2 hours to 4 days before departure: ₹3600 + ₹300 per traveller</Text>
                    <Text style={styles.text}>4 days to 365 days before departure: ₹3100 + ₹300 per traveller</Text>
                </View>

                <Text style={styles.sectionTitle}>Date Change Policy</Text>

                {/* Date Change Policy Section */}
                <View style={styles.policySection}>
                    <Text style={[styles.text, styles.boldText]}>Date Change Policy</Text>
                    <Text style={styles.text}>0 hours to 2 hours before departure: Non Changeable</Text>
                    <Text style={styles.text}>2 hours to 4 days before departure: ₹3350 + ₹300 + Fare difference</Text>
                    <Text style={styles.text}>4 days to 365 days before departure: ₹2850 + ₹300 + Fare difference</Text>
                </View>
            </Page>
        </Document>
    );
};

export default Ticket;
