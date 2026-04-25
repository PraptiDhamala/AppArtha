import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';

const HelpPage = () => {
  const faqs = [
    "How do I add a transaction?",
    "What are financial goals?",
    "How can I review my spending patterns?",
    "Can I delete or edit transactions?",
    "What categories can I use?",
    "How is my balance calculated?"
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Header Navigation (Matches ArthaAI Brand) */}
      <View style={styles.topNav}>
        <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
        <View style={styles.navIcons}>
          <View style={styles.notificationBadge}>
            <Ionicons name="notifications-outline" size={20} color="#000080" />
            <View style={styles.badgeDot}><Text style={styles.badgeText}>10</Text></View>
          </View>
          <View style={styles.avatar} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContent}>
          
          {/* Main Help Header */}
          <View style={styles.helpHeaderCenter}>
            <View style={styles.helpIconCircle}>
               <Ionicons name="help" size={40} color="#fff" />
            </View>
            <Text style={styles.helpTitle}>Help & Support</Text>
            <Text style={styles.helpSubtitle}>Find answers to common questions and get support</Text>
          </View>

          {/* Three-Column Support Cards */}
          <View style={styles.supportCardsRow}>
            <SupportCard 
              icon="book-outline" 
              title="Getting Started" 
              desc="Learn the basics of managing your finances with Artha AI" 
            />
            <SupportCard 
              icon="chatbubble-outline" 
              title="FAQs" 
              desc="Browse frequently asked questions and find quick answers" 
            />
            <SupportCard 
              icon="mail-outline" 
              title="Contact Support" 
              desc="Get in touch with our support team for personalized help" 
            />
          </View>

          {/* FAQ Section Container */}
          <View style={styles.faqContainer}>
            <Text style={styles.faqSectionTitle}>Frequently Asked Questions</Text>
            <Text style={styles.faqSectionSub}>Common questions about using Artha AI.</Text>
            
            <View style={styles.faqList}>
              {faqs.map((question, index) => (
                <TouchableOpacity key={index} style={styles.faqItem}>
                  <Text style={styles.faqText}>{question}</Text>
                  <Ionicons name="chevron-down" size={18} color="#94a3b8" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Chat Button */}
      <TouchableOpacity style={styles.fabChat}>
         <Ionicons name="chatbubble" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Sub-component for the top three support boxes
const SupportCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <TouchableOpacity style={styles.card}>
    <Ionicons name={icon} size={32} color="#000080" style={{ marginBottom: 12 }} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDesc}>{desc}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8fafc' },
  content: { flex: 1 },
  innerContent: { 
    padding: Platform.OS === 'web' ? 40 : 20, 
    maxWidth: 1200, 
    alignSelf: 'center', 
    width: '100%' 
  },
  
  // Header Styles
  topNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0'
  },
  navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  notificationBadge: { position: 'relative' },
  badgeDot: { 
    position: 'absolute', 
    top: -4, 
    right: -4, 
    backgroundColor: '#10b981', 
    borderRadius: 8, 
    width: 16, 
    height: 16, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  badgeText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#000080' },

  // Help Central Section
  helpHeaderCenter: { alignItems: 'center', marginTop: 20, marginBottom: 40 },
  helpIconCircle: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#9fa8da', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  helpTitle: { fontSize: 28, fontWeight: 'bold', color: '#1e293b' },
  helpSubtitle: { fontSize: 16, color: '#64748b', marginTop: 4 },

  // Support Cards Grid
  supportCardsRow: { 
    flexDirection: Platform.OS === 'web' ? 'row' : 'column', 
    gap: 20, 
    marginBottom: 40 
  },
  card: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 12, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    minHeight: 200,
    justifyContent: 'center'
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#64748b', textAlign: 'center', lineHeight: 20 },

  // FAQ Styling
  faqContainer: { 
    backgroundColor: '#fff', 
    borderRadius: 16, 
    padding: 30, 
    borderWidth: 1, 
    borderColor: '#e2e8f0',
    marginBottom: 60
  },
  faqSectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', marginBottom: 4 },
  faqSectionSub: { fontSize: 14, color: '#94a3b8', marginBottom: 25 },
  faqList: { borderTopWidth: 1, borderTopColor: '#f1f5f9' },
  faqItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#f1f5f9' 
  },
  faqText: { fontSize: 16, color: '#334155', fontWeight: '500' },

  // Floating Chat
  fabChat: { 
    position: 'absolute', 
    bottom: 30, 
    right: 30, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#000080', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 }
  }
});

export default HelpPage;