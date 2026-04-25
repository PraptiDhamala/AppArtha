import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function UtilitiesScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'Notebook' | 'Calculator'>('Notebook');

  return (
    <ScrollView 
      style={[styles.mainContainer, { paddingTop: insets.top }]} 
      contentContainerStyle={styles.contentContainer}
    >
      {/* Brand Header */}
      <View style={styles.topNav}>
        <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
        <View style={styles.navIcons}>
           <Ionicons name="notifications-outline" size={20} color="#000080" />
           <View style={styles.avatar} />
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.headerSection}>
        <View style={styles.titleRow}>
          <Ionicons name="construct" size={24} color="black" />
          <ThemedText style={styles.pageTitle}>Utilities</ThemedText>
        </View>
        <ThemedText style={styles.subHeaderText}>Financial calculators and notebook for budget planning</ThemedText>
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Notebook' && styles.activeTab]} 
          onPress={() => setActiveTab('Notebook')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'Notebook' && styles.activeTabText]}>Notebook</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, activeTab === 'Calculator' && styles.activeTab]} 
          onPress={() => setActiveTab('Calculator')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'Calculator' && styles.activeTabText]}>Calculator</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Conditional Content */}
      <View style={styles.card}>
        {activeTab === 'Notebook' ? (
          <View>
            <ThemedText style={styles.inputLabel}>Note Title</ThemedText>
            <TextInput style={styles.input} placeholder="Enter note title" />
            
            <ThemedText style={styles.inputLabel}>Note Content</ThemedText>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="Write your note..." 
              multiline 
            />
            
            <TouchableOpacity style={styles.saveButton}>
              <ThemedText style={styles.saveButtonText}>Save Note</ThemedText>
            </TouchableOpacity>

            <View style={styles.divider} />
            
            <ThemedText style={styles.sectionTitle}>Saved Notes</ThemedText>
            <View style={styles.noteItem}>
              <View style={styles.noteContent}>
                <ThemedText style={styles.noteTitle}>Grocery</ThemedText>
                <ThemedText style={styles.noteBody}>Kitkat</ThemedText>
                <ThemedText style={styles.noteDate}>Created: 15/04/2026, 20:17:14</ThemedText>
              </View>
              <TouchableOpacity><Ionicons name="close" size={18} color="#ef4444" /></TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.calculatorGrid}>
            <TouchableOpacity style={styles.calcOption}>
              <ThemedText style={styles.calcText}>Tax Calculator</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calcOption}>
              <ThemedText style={styles.calcText}>EMI Calculator</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calcOption}>
              <ThemedText style={styles.calcText}>Interest Calculator</ThemedText>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f4f7fe' },
  contentContainer: { padding: 16, paddingBottom: 40 },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },
  headerSection: { marginBottom: 20 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: 'black' },
  subHeaderText: { fontSize: 12, color: '#718096', marginTop: 4 },
  
  // Tab Styles
  tabContainer: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 8, padding: 4, marginBottom: 20, borderWidth: 1, borderColor: '#edf2f7' },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 6 },
  activeTab: { backgroundColor: '#b8c6db' },
  tabText: { fontSize: 14, color: '#718096', fontWeight: '500' },
  activeTabText: { color: 'black' },

  card: { backgroundColor: 'white', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7' },
  inputLabel: { fontSize: 13, fontWeight: 'bold', color: 'black', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#edf2f7', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 14 },
  textArea: { height: 100, textAlignVertical: 'top' },
  saveButton: { backgroundColor: '#000080', padding: 12, borderRadius: 8, alignSelf: 'flex-start' },
  saveButtonText: { color: 'white', fontWeight: 'bold', fontSize: 13 },
  divider: { height: 1, backgroundColor: '#edf2f7', marginVertical: 20 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: 'black', marginBottom: 15 },
  
  // Note Item
  noteItem: { padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#edf2f7', flexDirection: 'row', justifyContent: 'space-between' },
  noteContent: { flex: 1 },
  noteTitle: { fontSize: 14, fontWeight: 'bold', color: 'black' },
  noteBody: { fontSize: 13, color: '#718096', marginVertical: 4 },
  noteDate: { fontSize: 10, color: '#a0aec0' },

  // Calculator Styles
  calculatorGrid: { gap: 10 },
  calcOption: { padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#edf2f7', alignItems: 'center', backgroundColor: 'white' },
  calcText: { fontSize: 14, color: 'black', fontWeight: '500' }
});