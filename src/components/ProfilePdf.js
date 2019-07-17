import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { 
        backgroundColor: "#fff",
    },
    container: { 
        color: "#5B5B5B",
        fontFamily: 'Roboto',
    },
    header: { 
        backgroundColor: "#EEEEEE", 
        paddingTop:  "80px",
        paddingBottom:  "30px",
        paddingRight: "40px",
        paddingLeft: "40px",
    },
    body: { 
        paddingTop:  "60px",
        paddingBottom:  "40px",
        paddingRight: "40px",
        paddingLeft: "40px",
        fontSize: 10,
    },
    row: {
        flexGrow: 1,
        flexDirection: 'row',
        marginBottom: '16px',
        marginTop: '16px',
    },
    col: {
        width: '50%',
    },
    fontMono: {
        fontSize: 16,
        fontFamily: 'RobotoMono',
    },
    titulo: {
        fontSize: 38,
    }
});

Font.register(
    { family: 'Roboto', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf' },
  );
Font.register(
    { family: 'RobotoMono', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf' },
  );

const ProfilePdf = props => (
    <Document>
        <Page
            size="A4"
            wrap
            styel={styles.page}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.fontMono}>{props.nivel}</Text>
                    </View>   
                    <View>
                        <Text style={styles.titulo}>{props.cargo}</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.fontMono}>Descripción del cargo</Text>
                    </View>
                    <View>
                        <Text>{props.descripcion}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text>Cargos dependientes</Text>
                            <Text>{props.cargosDependientes}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>Cargo del jefe inmediato</Text>
                            <Text>{props.cargosJefeInmediato}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text>Cargo al cual reporta</Text>
                            <Text>{props.cargoAlReportar}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>Area</Text>
                            <Text>{props.area}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text>Ciudad</Text>
                            <Text>{props.ciudad}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text>Educación</Text>
                            <Text>{props.educacion}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text>Experiencia</Text>
                            <Text>{props.experiencia}</Text> 
                        </View>
                        <View style={styles.col}>
                            <Text>Idiomas</Text>
                            <Text>{props.idiomas}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text>Conocimiento técnico</Text>
                            <Text>{props.conocimientoTecnico}</Text> 
                        </View>
                    </View>
                </View>               
            </View>
        </Page>
    </Document>
)

export default ProfilePdf;