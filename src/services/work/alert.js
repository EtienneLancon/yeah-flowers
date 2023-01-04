export class AlertService
{
    // constructor()
    // {
    //     this.alerts = [];
    // }

    // addAlert(alert)
    // {
    //     this.alerts.push(alert);
    // }

    // removeAlert(alert)
    // {
    //     this.alerts = this.alerts.filter(a => a !== alert);
    // }

    // clear()
    // {
    //     this.alerts = [];
    // }

    // show(alert)
    // {
    //     this.addAlert(alert);
    //     setTimeout(() => this.removeAlert(alert), 5000);
    // }

    show(alert)
    {
        // this.ref.showAlert(alert);
        //
        this.ref.showAlert(alert.type, alert.message, alert?.header, alert?.iconSize, alert?.iconStyle)
    }

    success(message = 'Message', header = 'Success')
    {
        this.show({header, message, type: 'success'});
    }

    info(message = 'Message', header = 'Info')
    {
        this.show({header, message, type: 'info'});
    }

    error(message = 'Message', header = 'Error')
    {
        this.show({header, message, type: 'error'});
    }

    warning(message = 'Message', header = 'Warning')
    {
        this.show({header, message, type: 'warning'});
    }
}