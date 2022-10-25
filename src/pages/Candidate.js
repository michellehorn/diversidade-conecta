import { ScrollView } from 'react-native';
import TextField from '../components/TextField/TextField';

function Candidate() {
  const items = [
    { id: 'name', label: 'Como você se chama?' },
    { id: 'pronomes', label: 'Pronomes' },
    { id: 'medidores-diversidade', label: 'Medidores de diversidade' },
    { id: 'cid', label: 'Deficiência (CID)' },
    { id: 'faixa_etaria', label: 'Faixa etária' },
    { id: 'endereco', label: 'Onde você mora?' },
    { id: 'escolaridade', label: 'Escolaridade' },
    { id: 'profissao', label: 'Função mais atual' },
    { id: 'area_atuacao', label: 'Área de atuação' },
    { id: 'profissao_detalhada', label: 'Detalhe a profissão' },
    {
      id: 'profissao_anos_experiencia',
      label: 'Experiência (em anos) na área de atuação'
    },
    { id: 'qualidades_pessoais', label: 'Cite 3 qualidades pessoais' },
    { id: 'melhor_contato', label: 'Qual seu melhor contato?' },
    { id: 'curriculo', label: 'Mande seu currículo!' },
    { id: 'lgpd', label: 'LGPD' }
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: '20%',
        overflow: 'auto',
        margin: 'auto',
        paddingLeft: '4%',
        paddingRight: '4%'
      }}
    >
      {items.map((item, index) => (
        <TextField label={item.label} index={index} key={`view-${index}`} />
      ))}
    </ScrollView>
  );
}

export default Candidate;
