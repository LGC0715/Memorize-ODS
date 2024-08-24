import React from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, Image } from 'react-native'; // Importado Image

const ODSText = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Objetivos de Desenvolvimento Sustentável (ODS)</Text>
        
        <Text style={styles.paragraph}>
          Os Objetivos de Desenvolvimento Sustentável (ODS) são uma coleção de 17 objetivos globais estabelecidos pela Assembleia Geral das Nações Unidas em 2015, como parte da Agenda 2030 para o Desenvolvimento Sustentável. Eles visam abordar os desafios globais enfrentados pela humanidade, como a pobreza, a desigualdade, a mudança climática, a degradação ambiental, a paz e a justiça.
        </Text>
        
        {/* Inserção da imagem acima da lista dos ODS */}
        <Image
          source={{ uri: 'https://edukatu.org.br/uploads/post/image2/6872/ods_17_todos.jpg' }}
          style={styles.odsImage}
        />
        
        <Text style={styles.subtitle}>Lista dos ODS</Text>
        <Text style={styles.item}><Text style={styles.bold}>1.</Text> Erradicação da Pobreza: Acabar com a pobreza em todas as suas formas, em todos os lugares.</Text>
        <Text style={styles.item}><Text style={styles.bold}>2.</Text> Fome Zero: Acabar com a fome, alcançar a segurança alimentar e melhorar a nutrição e promover a agricultura sustentável.</Text>
        <Text style={styles.item}><Text style={styles.bold}>3.</Text> Saúde e Bem-Estar: Garantir a vida saudável e promover o bem-estar para todos, em todas as idades.</Text>
        <Text style={styles.item}><Text style={styles.bold}>4.</Text> Educação de Qualidade: Garantir educação inclusiva, equitativa e de qualidade para todos e promover oportunidades de aprendizagem ao longo da vida.</Text>
        <Text style={styles.item}><Text style={styles.bold}>5.</Text> Igualdade de Gênero: Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.</Text>
        <Text style={styles.item}><Text style={styles.bold}>6.</Text> Água Potável e Saneamento: Garantir a disponibilidade e a gestão sustentável da água e do saneamento para todos.</Text>
        <Text style={styles.item}><Text style={styles.bold}>7.</Text> Energia Acessível e Limpa: Garantir o acesso de todos a serviços de energia confiáveis, sustentáveis e modernos.</Text>
        <Text style={styles.item}><Text style={styles.bold}>8.</Text> Trabalho Decente e Crescimento Econômico: Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.</Text>
        <Text style={styles.item}><Text style={styles.bold}>9.</Text> Indústria, Inovação e Infraestrutura: Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.</Text>
        <Text style={styles.item}><Text style={styles.bold}>10.</Text> Redução das Desigualdades: Reduzir as desigualdades dentro dos países e entre eles.</Text>
        <Text style={styles.item}><Text style={styles.bold}>11.</Text> Cidades e Comunidades Sustentáveis: Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.</Text>
        <Text style={styles.item}><Text style={styles.bold}>12.</Text> Consumo e Produção Sustentáveis: Garantir padrões de consumo e produção sustentáveis.</Text>
        <Text style={styles.item}><Text style={styles.bold}>13.</Text> Ação Contra a Mudança Global do Clima: Combater a mudança do clima e seus impactos.</Text>
        <Text style={styles.item}><Text style={styles.bold}>14.</Text> Vida na Água: Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos para o desenvolvimento sustentável.</Text>
        <Text style={styles.item}><Text style={styles.bold}>15.</Text> Vida Terrestre: Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerenciar florestas de forma sustentável, combater a desertificação e deter a perda de biodiversidade.</Text>
        <Text style={styles.item}><Text style={styles.bold}>16.</Text> Paz, Justiça e Instituições Eficazes: Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, facilitar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.</Text>
        <Text style={styles.item}><Text style={styles.bold}>17.</Text> Parcerias e Meios de Implementação: Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.</Text>
        
        <Text style={styles.importanceTitle}>Importância</Text>
        <Text style={styles.paragraph}>
          As ODS são interligadas e reconhecem que ações em uma área podem impactar resultados em outras. O cumprimento dessas metas é fundamental para construir um futuro mais sustentável, justo e próspero para todos.
        </Text>
        
        <Text style={styles.paragraph}>
          Esses objetivos oferecem uma abordagem holística para enfrentar os desafios globais e são um chamado à ação para governos, empresas e sociedade civil trabalhando em conjunto.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    marginVertical: 15,
    textAlign: 'center',
  },
  item: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontFamily: 'Poppins_700Bold',
  },
  importanceTitle: {
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  odsImage: { // Novo estilo para a imagem
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 15,
  },
});

export default ODSText;
