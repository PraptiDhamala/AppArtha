import React from 'react';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { 
  StyleSheet, Text, View, ScrollView, 
  TouchableOpacity, SafeAreaView, Platform 
} from 'react-native';

const GoalsPage = () => {
  const goals = [
    { id: 1, title: 'Silver', category: 'Investment', saved: 62200, target: 90000, percentage: 69.1, remaining: 27800, deadline: 0, status: 'Achievable' },
    { id: 2, title: 'Gift', category: 'Savings', saved: 2000000, target: 20000000, percentage: 10.0, remaining: 18000000, deadline: 0, status: 'Action Needed' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContent}>

          {/* Top Nav */}
          <View style={styles.topNav}>
            <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
            <View style={styles.navIcons}>
              <Ionicons name="notifications-outline" size={20} color="#000080" />
              <View style={styles.avatar} />
            </View>
          </View>

          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Financial Goals</Text>
              <Text style={styles.subtitle}>Track and achieve your savings targets</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>+ Add Goal</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <StatBox title="Total Goals" value="3" />
            <StatBox title="Total Target" value="₹ 2009875" highlight />
            <StatBox title="Progress" value="10.27%" isLast />
          </View>

          {/* Recommendations */}
          <View style={styles.recContainer}>
            <Text style={styles.recTitle}>💡 Smart Savings Recommendations</Text>

            {goals.map(goal => (
              <View key={goal.id} style={styles.recRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.recLabel}>
                    DAILY SAVINGS FOR {goal.title.toUpperCase()}
                  </Text>
                  <Text style={styles.recMain}>
                    Save ₹{goal.remaining.toLocaleString()} / day
                  </Text>
                </View>

                <View style={[
                  styles.statusTag,
                  goal.status === 'Achievable' ? styles.tagGreen : styles.tagRed
                ]}>
                  <Text style={[
                    styles.tagText,
                    goal.status === 'Achievable' ? styles.textGreen : styles.textRed
                  ]}>
                    {goal.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Goals */}
          <Text style={styles.sectionHeader}>Active Goals</Text>

          <View style={styles.goalsGrid}>
            {goals.map(goal => (
              <View key={goal.id} style={styles.goalCard}>

                <View style={styles.goalTop}>
                  <Text style={styles.goalTitle}>{goal.title}</Text>
                  <Text style={{ color: '#cbd5e1' }}>🗑️</Text>
                </View>

                <Text style={styles.goalSub}>{goal.category}</Text>

                <View style={styles.progressTextRow}>
                  <Text style={styles.boldText}>Progress</Text>
                  <Text style={styles.valText}>
                    <Text style={{ color: '#10b981' }}>
                      ₹{goal.saved.toLocaleString()}
                    </Text> / ₹{goal.target.toLocaleString()}
                  </Text>
                </View>

                <View style={styles.progressBarBg}>
                  <View 
                    style={[
                      styles.progressBarFill, 
                      { width: `${goal.percentage}%` }
                    ]} 
                  />
                </View>

                <Text style={styles.italicText}>
                  {goal.percentage}% complete
                </Text>

                <View style={styles.cardFooter}>
                  <View>
                    <Text style={styles.footerLabel}>REMAINING</Text>
                    <Text style={styles.footerVal}>
                      ₹{goal.remaining.toLocaleString()}
                    </Text>
                  </View>

                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.footerLabel}>DEADLINE</Text>
                    <Text style={styles.footerVal}>
                      {goal.deadline} days
                    </Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.contribBtn}>
                  <Text style={styles.contribText}>
                    ADD CONTRIBUTION
                  </Text>
                </TouchableOpacity>

              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const StatBox = ({ title, value, highlight, isLast }: any) => (
  <View style={[styles.statBox, isLast && { marginRight: 0 }]}>
    <Text style={styles.statLabel}>{title.toUpperCase()}</Text>
    <Text style={[styles.statVal, highlight && { color: '#000080' }]}>
      {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },

  content: { flex: 1 },

  innerContent: { 
    paddingHorizontal: Platform.OS === 'web' ? 40 : 16,
    paddingTop: Platform.OS === 'web' ? 20 : 10,
    paddingBottom: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },

  topNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 12 
  },

  navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },

  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },

  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },

  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 24 
  },

  title: { fontSize: 28, fontWeight: 'bold', color: '#0f172a' },

  subtitle: { fontSize: 14, color: '#718096', marginTop: 4 },

  addBtn: { 
    backgroundColor: '#000080', 
    paddingVertical: 10, 
    paddingHorizontal: 18, 
    borderRadius: 8 
  },

  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },

  statsRow: { flexDirection: 'row', marginBottom: 24 },

  statBox: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 18, 
    borderRadius: 12, 
    marginRight: 12, 
    borderWidth: 1, 
    borderColor: '#f1f5f9' 
  },

  statLabel: { fontSize: 11, fontWeight: 'bold', color: '#94a3b8', marginBottom: 6 },

  statVal: { fontSize: 20, fontWeight: 'bold', color: '#0f172a' },

  recContainer: { 
    backgroundColor: '#f0fdfa', 
    borderRadius: 12, 
    padding: 18, 
    borderWidth: 1, 
    borderColor: '#ccfbf1', 
    marginBottom: 24 
  },

  recTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },

  recRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 14, 
    borderRadius: 10, 
    marginBottom: 8 
  },

  recLabel: { fontSize: 10, fontWeight: 'bold', color: '#94a3b8' },

  recMain: { fontSize: 14, fontWeight: 'bold', color: '#334155' },

  statusTag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, borderWidth: 1 },

  tagGreen: { backgroundColor: '#f0fdfa', borderColor: '#bbf7d0' },

  tagRed: { backgroundColor: '#fef2f2', borderColor: '#fecaca' },

  tagText: { fontSize: 10, fontWeight: 'bold' },

  textGreen: { color: '#10b981' },

  textRed: { color: '#ef4444' },

  sectionHeader: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },

  goalsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },

  goalCard: { 
    backgroundColor: '#fff', 
    width: Platform.OS === 'web' ? '48%' : '100%', 
    padding: 18, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#f1f5f9' 
  },

  goalTop: { flexDirection: 'row', justifyContent: 'space-between' },

  goalTitle: { fontSize: 18, fontWeight: 'bold' },

  goalSub: { fontSize: 13, color: '#94a3b8', marginBottom: 16 },

  progressTextRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },

  boldText: { fontWeight: 'bold' },

  valText: { fontWeight: 'bold' },

  progressBarBg: { height: 8, backgroundColor: '#f1f5f9', borderRadius: 4 },

  progressBarFill: { height: '100%', backgroundColor: '#10b981' },

  italicText: { fontSize: 11, color: '#94a3b8', marginTop: 6 },

  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },

  footerLabel: { fontSize: 10, color: '#94a3b8' },

  footerVal: { fontWeight: 'bold' },

  contribBtn: { 
    marginTop: 16, 
    borderWidth: 1, 
    borderColor: '#e2e8f0', 
    padding: 10, 
    borderRadius: 8, 
    alignItems: 'center' 
  },

  contribText: { fontSize: 11, fontWeight: 'bold', color: '#64748b' }
});

export default GoalsPage;