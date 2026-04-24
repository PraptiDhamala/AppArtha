import { Image } from 'expo-image';
import { Platform, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      {/* 1. Header Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={{ flex: 1 }}>
          <ThemedText type="title">Dashboard</ThemedText>
          <ThemedText style={styles.subHeaderText}>Welcome to Your Account!!</ThemedText>
        </ThemedView>
        <HelloWave />
      </ThemedView>

      {/* 2. Action Button (Add Transaction) */}
      <TouchableOpacity style={styles.btnPri} activeOpacity={0.7}>
        <ThemedText style={styles.btnText}>+ Add Transaction</ThemedText>
      </TouchableOpacity>

      {/* 3. Cards Section (The Grid Replacement) */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <ThemedText style={styles.cardTitle}>Total Balance</ThemedText>
          <ThemedText style={styles.value}>Rs. 5,240</ThemedText>
          <ThemedText style={{fontSize: 10, color: '#1b7e2c'}}>Safe spending</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText style={styles.cardTitle}>Income</ThemedText>
          <ThemedText style={[styles.value, styles.positive]}>Rs. 2,100</ThemedText>
          <ThemedText style={{fontSize: 10, color: 'gray'}}>Current Total</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText style={styles.cardTitle}>Expenses</ThemedText>
          <ThemedText style={[styles.value, styles.negative]}>Rs. 850</ThemedText>
          <ThemedText style={{fontSize: 10, color: 'gray'}}>Current Total</ThemedText>
        </View>
      </View>

      {/* 4. Recent Transactions Section (Table Replacement) */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Recent Transactions</ThemedText>
        
        {/* Transaction Row 1 */}
        <View style={styles.tableRow}>
          <View>
            <ThemedText type="defaultSemiBold">Food & Dining</ThemedText>
            <ThemedText style={{fontSize: 12, color: 'gray'}}>Apr 24, 2026</ThemedText>
          </View>
          <ThemedText style={styles.negative}>- Rs. 450</ThemedText>
        </View>

        {/* Transaction Row 2 */}
        <View style={styles.tableRow}>
          <View>
            <ThemedText type="defaultSemiBold">Salary</ThemedText>
            <ThemedText style={{fontSize: 12, color: 'gray'}}>Apr 23, 2026</ThemedText>
          </View>
          <ThemedText style={styles.positive}>+ Rs. 2,000</ThemedText>
        </View>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#6b7280',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(128, 128, 128, 0.05)',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  // Finance App Custom Styles
  btnPri: {
    backgroundColor: 'navy',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.15)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  cardTitle: {
    fontSize: 11,
    color: '#666',
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  positive: { color: '#1b7e2c' },
  negative: { color: '#c62828' },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  }
});