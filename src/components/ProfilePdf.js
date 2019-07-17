import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { backgroundColor: "#fff" },
    container: { color: "#000", height: 800, width: 800 }
});

const ProfilePdf = props => (
    <Document>
        <Page
            size="A4"
            wrap
            styel={styles.page}
        >
            <View style={styles.container}>
                <Text>{props.nivel}</Text>
                <Text>{props.cargo}</Text>
                <Text>{props.descripcion}</Text>
                <Text>{props.cargosDependientes}</Text>
                <Text>{props.cargosJefeInmediato}</Text>
                <Text>{props.cargoAlReportar}</Text>
                <Text>{props.area}</Text>                
                <Text>{props.ciudad}</Text>                
                <Text>{props.educacion}</Text>                
                <Text>{props.experiencia}</Text>                
                <Text>{props.idiomas}</Text>                
                <Text>{props.conocimientoTecnico}</Text>                
            </View>

        </Page>
    </Document>
)

export default ProfilePdf;