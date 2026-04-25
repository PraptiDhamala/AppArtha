import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/* --- UI HELPERS (Defined at top to avoid Reference Errors) --- */

const StatCard = ({ label, value, count, color }) => (
  <View style={styles.statCard}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={[styles.statValue, {color}]}>{value}</Text>
    <Text style={styles.statSubText}>{count} transactions</Text>
  </View>
);

const DropdownField = ({ label, value, onPress }) => (
  <View style={styles.dropdownGroup}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity style={styles.dropdown} onPress={onPress}>
      <Text style={styles.dropdownText}>{value}</Text>
      <Text style={styles.chevron}>▾</Text>
    </TouchableOpacity>
  </View>
);

const TransactionItem = ({ icon, category, date, amount, type }) => (
  <View style={styles.transactionRow}>
    <View style={[styles.iconCircle, {backgroundColor: type === 'income' ? '#eff6ff' : '#fee2e2'}]}>
      <Text>{icon}</Text>
    </View>
    <View style={{flex: 1, marginLeft: 15}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.categoryName}>{category}</Text>
        <View style={styles.categoryBadge}><Text style={styles.badgeText}>{category}</Text></View>
      </View>
      <Text style={styles.dateText}>{date}</Text>
    </View>
    <Text style={[styles.amountText, {color: type === 'income' ? '#10b981' : '#dc2626'}]}>{amount}</Text>
    <TouchableOpacity style={{marginLeft: 15}}><Text>🗑️</Text></TouchableOpacity>
  </View>
);

/* --- SVG COMPONENTS (Updated to Black) --- */

const SVGFileTextIcon = () => (
  <View style={{width: 20, height: 20}}>
    <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  </View>
);

const SVGFunnelIcon = () => (
  <View style={{width: 14, height: 14}}>
    <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  </View>
);

const SVGSearchIcon = () => (
  <View style={{width: 16, height: 16}}>
    <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </View>
);

/* --- MAIN COMPONENT --- */

export default function ReviewScreen() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filterValues, setFilterValues] = useState({
    type: 'All Types',
    category: 'All Categories',
    sortBy: 'Date: Desc'
  });

  const handleSelect = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
    setActiveDropdown(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Artha AI Branding Top Bar */}
        <View style={styles.topNav}>
          <Text style={styles.navBrand}>Artha AI</Text>
          <View style={styles.navIcons}>
             <Ionicons name="notifications-outline" size={20} color="#000080" />
             <View style={styles.avatar} />
          </View>
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <View style={styles.headingIcon}>
              <SVGFileTextIcon />
            </View>
            <Text style={styles.title}>Review Transactions</Text>
          </View>
          <Text style={styles.subtitle}>Search, filter, and analyze your transaction history</Text>
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabWrapper}>
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              onPress={() => setActiveTab('transactions')}
              style={[styles.tab, activeTab === 'transactions' && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === 'transactions' && styles.activeTabText]}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setActiveTab('insights')}
              style={[styles.tab, activeTab === 'insights' && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === 'insights' && styles.activeTabText]}>AI Insights</Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab === 'transactions' ? (
          <View>
            {/* Transaction Statistics Cards */}
            <View style={styles.statsRow}>
              <StatCard label="Filtered Total" value="₹ 1228618.00" count="48" color="#1e293b" />
              <StatCard label="Filtered Income" value="₹ 1467785.00" count="13" color="#2563eb" />
              <StatCard label="Filtered Expenses" value="₹ 239167.00" count="35" color="#dc2626" />
            </View>

            {/* Existing Transaction Filter Logic */}
            <View style={styles.filterCard}>
              <View style={styles.filterHeader}>
                <SVGFunnelIcon />
                <View style={{marginLeft: 8}}>
                  <Text style={styles.filterTitle}>Filters & Search</Text>
                  <Text style={styles.filterSubtitle}>Narrow down your transaction history</Text>
                </View>
              </View>
              <View style={styles.searchContainer}>
                <View style={styles.searchIconPos}><SVGSearchIcon /></View>
                <TextInput style={styles.searchBar} placeholder="Search transactions..." placeholderTextColor="#94a3b8" value={searchQuery} onChangeText={setSearchQuery}/>
              </View>
              <View style={styles.dropdownRow}>
                <DropdownField label="TYPE" value={filterValues.type} onPress={() => setActiveDropdown('type')} />
                <DropdownField label="CATEGORY" value={filterValues.category} onPress={() => setActiveDropdown('category')} />
                <DropdownField label="SORT BY" value={filterValues.sortBy} onPress={() => setActiveDropdown('sortBy')} />
                <TouchableOpacity style={styles.clearBtn} onPress={() => setFilterValues({type: 'All Types', category: 'All Categories', sortBy: 'Date: Desc'})}>
                  <Text style={styles.clearBtnText}>Clear Filters</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TransactionItem icon="🏠" category="Housing" date="April 16, 2026" amount="-₹1887.00" type="expense" />
            <TransactionItem icon="⚡" category="Utilities" date="April 16, 2026" amount="-₹1900.00" type="expense" />
            <TransactionItem icon="🛒" category="Groceries" date="April 16, 2026" amount="-₹2300.00" type="expense" />
            <TransactionItem icon="🚌" category="Transport" date="April 16, 2026" amount="-₹1000.00" type="expense" />
            <TransactionItem icon="💰" category="Salary" date="April 16, 2026" amount="+₹100000.00" type="income" />
          </View>
        ) : (
          /* --- AI INSIGHTS PART (PORTED FROM DASHBOARD) --- */
          <View style={styles.insightsContent}>
            <View style={styles.aiBanner}>
              <Ionicons name="sparkles" size={16} color="#10b981" />
              <Text style={styles.aiBannerText}>AI Financial Insights - Powered by intelligent analysis</Text>
            </View>

            <View style={styles.insightsGrid}>
              <View style={[styles.insightCard, { borderColor: '#e0e7ff' }]}>
                <Text style={styles.insightLabel}>Monthly Spending Forecast</Text>
                <Text style={styles.insightValue}>₹21704.4</Text>
                <Text style={styles.insightSub}>Projected total for this month</Text>
              </View>
              <View style={[styles.insightCard, { borderColor: '#dcfce7' }]}>
                <Text style={styles.insightLabel}>Spending Trend: Stable</Text>
                <Text style={styles.insightValue}>0%</Text>
                <Text style={styles.insightSub}>Change compared to earlier transactions</Text>
              </View>
            </View>

            <View style={styles.recommendationBox}>
              <Text style={styles.sectionTitle}>Personalized Recommendations</Text>
              <View style={styles.recItem}>
                <Ionicons name="trending-down" size={14} color="#2563eb" />
                <Text style={styles.recText}>Optimize Utilities Spending: Your highest category</Text>
              </View>
              <View style={styles.recItem}>
                <Ionicons name="leaf" size={14} color="#10b981" />
                <Text style={styles.recText}>Savings Rate: Currently at 83.7%</Text>
              </View>
            </View>

            {/* End of Month Projection Section */}
            <View style={styles.projectionCard}>
               <Text style={styles.sectionTitle}>End of Month Projection</Text>
               <View style={styles.projectionRow}>
                  <View>
                    <Text style={styles.projSubLabel}>Current Spending</Text>
                    <Text style={styles.projMainValue}>₹18087.0</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.projSubLabel}>Projected Total</Text>
                    <Text style={[styles.projMainValue, { color: '#2563eb' }]}>₹21704.4</Text>
                  </View>
               </View>
            </View>

            {/* Category Spending Analysis Section */}
            <View style={styles.analysisCard}>
              <Text style={styles.sectionTitle}>Category Spending Analysis</Text>
              <CategoryBar label="Utilities" value="₹121890.0" percent="51.0%" color="#10b981" />
              <CategoryBar label="Education" value="₹29200.0" percent="12.2%" color="#10b981" />
              <CategoryBar label="Housing" value="₹22987.0" percent="9.6%" color="#10b981" />
            </View>
          </View>
        )}
      </ScrollView>

      {activeDropdown && (
        <Modal transparent animationType="fade">
          <TouchableOpacity style={styles.modalOverlay} onPress={() => setActiveDropdown(null)}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select {activeDropdown.toUpperCase()}</Text>
              <TouchableOpacity onPress={() => handleSelect(activeDropdown, 'Option 1')} style={styles.modalItem}><Text>Option 1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelect(activeDropdown, 'Option 2')} style={styles.modalItem}><Text>Option 2</Text></TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}

const CategoryBar = ({ label, value, percent, color }) => (
  <View style={styles.catRow}>
    <View style={styles.catLabelRow}>
      <Text style={styles.catLabelText}>{label}</Text>
      <Text style={styles.catValueText}>{value}</Text>
    </View>
    <View style={styles.progressBarBg}>
      <View style={[styles.progressBarFill, { width: percent, backgroundColor: color }]} />
    </View>
    <Text style={styles.catPercentText}>{percent}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  scrollContent: { padding: 24 },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#e2e8f0', marginBottom: 20 },
  navBrand: { fontSize: 16, fontWeight: '800', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },
  header: { marginBottom: 24 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  headingIcon: { marginRight: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1e293b' },
  subtitle: { fontSize: 13, color: '#64748b', marginTop: 4 },
  tabWrapper: { marginBottom: 24 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#e2e8f0', padding: 3, borderRadius: 8, width: 220 },
  tab: { flex: 1, paddingVertical: 6, alignItems: 'center', borderRadius: 6 },
  activeTab: { backgroundColor: '#fff', elevation: 2 },
  tabText: { fontSize: 12, fontWeight: '600', color: '#64748b' },
  activeTabText: { color: '#4338ca' },
  statsRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  statLabel: { fontSize: 11, fontWeight: 'bold', color: '#64748b', marginBottom: 4 },
  statValue: { fontSize: 18, fontWeight: '900' },
  statSubText: { fontSize: 10, color: '#94a3b8', marginTop: 4 },
  filterCard: { backgroundColor: '#fff', padding: 24, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', marginBottom: 16 },
  filterHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  filterTitle: { fontSize: 13, fontWeight: 'bold', color: '#1e293b' },
  filterSubtitle: { fontSize: 11, color: '#64748b' },
  searchContainer: { position: 'relative', marginBottom: 20 },
  searchIconPos: { position: 'absolute', left: 12, top: 11, zIndex: 1 },
  searchBar: { borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 8, padding: 10, paddingLeft: 38, fontSize: 13, backgroundColor: '#fff' },
  dropdownRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  dropdownGroup: { width: '24%' },
  label: { fontSize: 10, fontWeight: '800', color: '#94a3b8', marginBottom: 6 },
  dropdown: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#e2e8f0', padding: 10, borderRadius: 8, backgroundColor: '#fff' },
  dropdownText: { fontSize: 12, color: '#1e293b' },
  chevron: { color: '#94a3b8', fontSize: 12 },
  clearBtn: { borderWidth: 1, borderColor: '#e2e8f0', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8 },
  clearBtnText: { fontSize: 12, color: '#64748b', fontWeight: '500' },
  transactionRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  iconCircle: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  categoryName: { fontSize: 14, fontWeight: 'bold', color: '#1e293b' },
  categoryBadge: { backgroundColor: '#f1f5f9', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginLeft: 8 },
  badgeText: { fontSize: 10, color: '#64748b', fontWeight: '700' },
  dateText: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
  amountText: { fontSize: 14, fontWeight: 'bold' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#fff', width: 250, borderRadius: 12, padding: 20 },
  modalTitle: { fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  modalItem: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },

  /* AI Insights Specific Styles */
  insightsContent: { gap: 20 },
  aiBanner: { flexDirection: 'row', backgroundColor: '#ecfdf5', padding: 12, borderRadius: 8, alignItems: 'center', gap: 10 },
  aiBannerText: { color: '#065f46', fontSize: 12, fontWeight: '600' },
  insightsGrid: { flexDirection: 'row', gap: 15 },
  insightCard: { flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 10, borderWidth: 1 },
  insightLabel: { fontSize: 11, color: '#64748b', fontWeight: '600' },
  insightValue: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginVertical: 4 },
  insightSub: { fontSize: 10, color: '#94a3b8' },
  recommendationBox: { backgroundColor: '#fff', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#1e293b', marginBottom: 12 },
  recItem: { flexDirection: 'row', gap: 10, marginBottom: 10, alignItems: 'center' },
  recText: { fontSize: 12, color: '#4b5563' },
  projectionCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  projectionRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  projSubLabel: { fontSize: 11, color: '#94a3b8', marginBottom: 4 },
  projMainValue: { fontSize: 20, fontWeight: 'bold' },
  analysisCard: { backgroundColor: '#fff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  catRow: { marginBottom: 15 },
  catLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  catLabelText: { fontSize: 13, fontWeight: '600' },
  catValueText: { fontSize: 13, color: '#1e293b' },
  progressBarBg: { height: 8, backgroundColor: '#f1f5f9', borderRadius: 4, overflow: 'hidden' },
  progressBarFill: { height: '100%', borderRadius: 4 },
  catPercentText: { fontSize: 11, color: '#64748b', alignSelf: 'flex-end', marginTop: 3 }
});