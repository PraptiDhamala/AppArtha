import React, { useState } from 'react';
import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { 
  StyleSheet, Text, View, ScrollView, 
  TouchableOpacity, SafeAreaView, Platform 
} from 'react-native';

const GoalsPage = () => {
  const [activeTab, setActiveTab] = useState('My Goals');
  const [showHelp, setShowHelp] = useState(false);

  const goals = [
    { id: 1, title: 'Silver', category: 'Investment', saved: 62200, target: 90000, percentage: 69.1, remaining: 27800, deadline: 0, status: 'Achievable' },
    { id: 2, title: 'Gift', category: 'Savings', saved: 2000000, target: 20000000, percentage: 10.0, remaining: 18000000, deadline: 0, status: 'Action Needed' },
  ];

  const faqs = [
    "How do I add a transaction?",
    "What are financial goals?",
    "How can I review my spending patterns?",
    "Can I delete or edit transactions?",
    "What categories can I use?",
    "How is my balance calculated?"
  ];

  // --- HELP PAGE VIEW (ArthaAI Style) ---
  if (showHelp) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.innerContent}>
            {/* Top Back Nav */}
            <TouchableOpacity onPress={() => setShowHelp(false)} style={styles.backBtn}>
              <Ionicons name="arrow-back" size={20} color="#000080" />
              <Text style={styles.backBtnText}>Back to Dashboard</Text>
            </TouchableOpacity>

            {/* Central Help Header */}
            <View style={styles.helpHeaderCenter}>
              <View style={styles.helpIconCircle}>
                 <Ionicons name="help" size={40} color="#fff" />
              </View>
              <Text style={styles.helpTitle}>Help & Support</Text>
              <Text style={styles.helpSubtitle}>Find answers to common questions and get support</Text>
            </View>

            {/* Help Cards Row */}
            <View style={styles.helpCardsRow}>
              <SupportCard icon="book" title="Getting Started" desc="Learn the basics of managing your finances with Artha AI" />
              <SupportCard icon="chatbubble-ellipses" title="FAQs" desc="Browse frequently asked questions and find quick answers" />
              <SupportCard icon="mail" title="Contact Support" desc="Get in touch with our support team for personalized help" />
            </View>

            {/* FAQ Section */}
            <View style={styles.faqContainer}>
              <Text style={styles.faqSectionTitle}>Frequently Asked Questions</Text>
              <Text style={styles.faqSectionSub}>Common questions about using Artha AI.</Text>
              
              <View style={styles.faqList}>
                {faqs.map((q, index) => (
                  <TouchableOpacity key={index} style={styles.faqItem}>
                    <Text style={styles.faqText}>{q}</Text>
                    <Ionicons name="chevron-down" size={18} color="#94a3b8" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Support Chat Floating Button */}
        <TouchableOpacity style={styles.fabChat}>
           <Ionicons name="chatbubble-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // --- MAIN GOALS VIEW ---
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContent}>
          <View style={styles.header}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <ThemedText style={styles.brandText}>ArthaAI</ThemedText>
                <TouchableOpacity onPress={() => setShowHelp(true)}>
                  <Ionicons name="help-circle-outline" size={28} color="#000080" />
                </TouchableOpacity>
              </View>
              <View style={styles.titleRow}>
                <Ionicons name="target-outline" size={32} color="#0f172a" style={{ marginRight: 10 }} />
                <Text style={styles.title}>Financial Goals</Text>
              </View>
              <Text style={styles.subtitle}>Track and achieve your savings targets</Text>
            </View>
          </View>

          {/* ... Rest of your Main Goals Content ... */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Sub-component for Support Cards
const SupportCard = ({ icon, title, desc }: any) => (
  <TouchableOpacity style={styles.supportCard}>
    <Ionicons name={icon} size={30} color="#000080" style={{ marginBottom: 15 }} />
    <Text style={styles.supportCardTitle}>{title}</Text>
    <Text style={styles.supportCardDesc}>{desc}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  content: { flex: 1 },
  innerContent: { padding: Platform.OS === 'web' ? 40 : 20, maxWidth: 1200, alignSelf: 'center', width: '100%' },
  
  // Header Branding
  brandText: { fontSize: 24, fontWeight: 'bold', color: '#000080', marginBottom: 4 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0f172a' },
  titleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#718096', marginTop: 4 },
  header: { marginBottom: 30 },

  // Help Page Specific
  backBtn: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  backBtnText: { marginLeft: 8, color: '#000080', fontWeight: 'bold', fontSize: 14 },
  
  helpHeaderCenter: { alignItems: 'center', marginBottom: 40 },
  helpIconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#a5b4fc', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  helpTitle: { fontSize: 26, fontWeight: 'bold', color: '#0f172a' },
  helpSubtitle: { fontSize: 16, color: '#64748b', marginTop: 5 },

  helpCardsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 20, marginBottom: 40 },
  supportCard: { flex: 1, minWidth: 300, backgroundColor: '#fff', padding: 30, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f9', elevation: 2 },
  supportCardTitle: { fontSize: 18, fontWeight: 'bold', color: '#0f172a', marginBottom: 10 },
  supportCardDesc: { fontSize: 14, color: '#64748b', textAlign: 'center', lineHeight: 20 },

  faqContainer: { backgroundColor: '#fff', padding: 30, borderRadius: 16, borderWidth: 1, borderColor: '#f1f5f9' },
  faqSectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#0f172a' },
  faqSectionSub: { fontSize: 14, color: '#94a3b8', marginBottom: 25 },
  faqList: { borderTopWidth: 1, borderTopColor: '#f1f5f9' },
  faqItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  faqText: { fontSize: 15, color: '#334155', fontWeight: '500' },

  fabChat: { position: 'absolute', bottom: 30, right: 30, width: 56, height: 56, borderRadius: 28, backgroundColor: '#000080', justifyContent: 'center', alignItems: 'center', elevation: 5 }
});

export default GoalsPage;